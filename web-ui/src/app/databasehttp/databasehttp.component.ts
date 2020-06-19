import{ GlobalConstant } from '../common/globalconstant';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable, Input, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-databasehttp',
  templateUrl: './databasehttp.component.html',
  styleUrls: ['./databasehttp.component.css']
})

@Injectable(
  {providedIn:"root"}
)
export class DatabasehttpComponent implements OnInit {
  public SERVER_BUFFER_;
  public tempaddr="";
  public tempjson=[];
  @Input('ngModel')
  @Input() recvjson=[];/*Recevoir du json du serveur*/
  @Input() textbutton="click here";
  @Input() recvaddr="";/*Adresse http de réception du serveur*/
  @Input() sendaddr="";/*"Addresse http d'envoi au serveur"*/
  @Input() sendjson="";/*Envoyer du JSON au serveur*/
  @Input() endpoint:string;
  @Input() formtype:string;
  public sejs:any;
  public httpsend;
  public httpresponse=[];
  public recipe_list_=[];
  public recipe_ok_="";

  constructor(private httpClient: HttpClient) { }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}




  searchRecipe(type){
    (async () => {
  this.httpresponse=[];
    this.recvaddr=GlobalConstant.INGREDIENT_FIND_+type;
      this.restRecv();
      console.log(this.httpresponse.length)
      while (this.httpresponse.length==0){
        await this.delay(4);
      }
      var re=this.httpresponse;
      var json=re;
      var dico_ingredient_={}
      var dico_recipe_={}
      for(var coun=0;coun<json.length;coun++){
        var name=json[coun]["productName"]

        var actu=json[coun]["units"];
        var ll=actu.length

        var dddd=String(actu.substr(1,ll-2));
        actu=JSON.parse('{'+dddd+'}')

        if(actu['myrecipe']){
          if(dico_ingredient_[actu['myrecipe']]){
            dico_ingredient_[actu['myrecipe']].push(actu);
          }
          else{
            dico_ingredient_[actu['myrecipe']]=[];
            dico_ingredient_[actu['myrecipe']].push(actu);

          }


        }
        else{
          dico_recipe_[name]=actu;
        }


      }

      var recipe_list_=[];
      for (const rename in dico_recipe_) {
        var ad_recipe_=dico_recipe_[rename];
        var uu={
          descriptiontext: "",
          grade: "",
          image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
          ingredientlist: JSON.stringify(dico_ingredient_[ad_recipe_.name]),
          name: ad_recipe_.name,
          personnumber: ad_recipe_.personnumber,
          preptext: ad_recipe_.preptext,
          preptime: ad_recipe_.preptime
        };
        recipe_list_.push(uu);
      }
      this.recipe_list_=recipe_list_;
      this.recipe_ok_="ok";

    })();

    }


    recvRecipeII(type){
      (async () => {
    this.httpresponse=[];
        this.recvaddr=GlobalConstant.INGREDIENT_TYPE_+GlobalConstant.USER_NAME_+"-"+type;
        this.restRecv();
        /*console.log(this.httpresponse.length)*/
        while (this.httpresponse.length==0){
          await this.delay(4);
        }
        var re=this.httpresponse;


        this.recipe_list_=this.httpresponse;
        this.recipe_ok_="ok";

      })();

      }

recvRecipe(type){
  (async () => {
this.httpresponse=[];
    this.recvaddr=GlobalConstant.INGREDIENT_TYPE_+GlobalConstant.USER_NAME_+"-"+type;
    this.restRecv();
    /*console.log(this.httpresponse.length)*/
    while (this.httpresponse.length==0){
      await this.delay(4);
    }
    var re=this.httpresponse;
    var json=re;
    var dico_ingredient_={}
    var dico_recipe_={}
    for(var coun=0;coun<json.length;coun++){
      var name=json[coun]["productName"]
      /*console.log(name);*/
      var actu=json[coun]["units"];
      var ll=actu.length

      var dddd=String(actu.substr(1,ll-2));
      actu=JSON.parse('{'+dddd+'}')
      /*console.log(actu);*/
      if(actu['myrecipe']){
        if(dico_ingredient_[actu['myrecipe']]){
          dico_ingredient_[actu['myrecipe']].push(actu);
        }
        else{
          dico_ingredient_[actu['myrecipe']]=[];
          dico_ingredient_[actu['myrecipe']].push(actu);

        }


      }
      else{
        dico_recipe_[name]=actu;
      }


    }

    var recipe_list_=[];
    for (const rename in dico_recipe_) {
      var ad_recipe_=dico_recipe_[rename];
      var uu={
        descriptiontext: "",
        grade: "",
        image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
        ingredientlist: JSON.stringify(dico_ingredient_[ad_recipe_.name]),
        name: ad_recipe_.name,
        personnumber: ad_recipe_.personnumber,
        preptext: ad_recipe_.preptext,
        preptime: ad_recipe_.preptime
      };
      recipe_list_.push(uu);
    }
    this.recipe_list_=recipe_list_;
    this.recipe_ok_="ok";

  })();

  }


addRecipe(name,item){


  var le=item.ingredientlist.length;
  var fe=le-1;


  var user_name_=GlobalConstant.USER_NAME_.toString();

    (async () => {
    for(var coun=0;coun<le;coun++){


      var actual=item.ingredientlist[coun];
      actual['myrecipe']=item.name;
      var ff={
        "productName":item.name+"ingr"+coun.toString(),
        "productType":user_name_+"-"+name,
        "calories":fe,
        "units":JSON.stringify(actual)
    }


    this.httpresponse=[];
    this.sendaddr=GlobalConstant.INGREDIENT_PATH_;
    this.sejs=ff;
    this.restSendJSON();


      while (this.httpresponse.length==0){
        await this.delay(4);
      }

    }


    item.ingredientlist=[];
    var data={
      "productName":item.name,
      "productType":user_name_+"-"+name,
      "calories":fe,
      "units":JSON.stringify(item)
  };


    this.httpresponse=[];
    this.sendaddr=GlobalConstant.INGREDIENT_PATH_;
    this.sejs=data;
    this.restSendJSON();

    while (this.httpresponse.length==0){
      await this.delay(4);
    }
  })();

}



  dataSendWithPut() {/*Permet de mettre à jour les données.*/
    console.log("méthode put invoquée maintenant")
    /*for(var coun=0;coun<this.sendjson.length;coun++){*/
    this.httpClient
      .put(this.sendaddr, this.httpsend)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    /*};*/
  }


  dataSendWithPost() {/*Permet de mettre à jour les données.*/
    console.log("méthode post invoquée maintenant")
    /*for(var coun=0;coun<this.sendjson.length;coun++){*/
    this.httpClient
      .post(this.sendaddr, this.httpsend)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    /*};*/
  }



  dataDelete() {
    console.log("méthode delete invoquée maintenant")
    this.httpClient
      .delete<any[]>(this.recvaddr)
      .subscribe(
        (response) => {
          this.httpresponse = response;
          console.log("réponse du serveur:")
          /*console.log(this.httpresponse);*/
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}
  dataReceiveWithGetII(recvaddr) {
    console.log("méthode get invoquée maintenant")
    this.httpClient.get<any[]>(recvaddr).pipe(map(data => {console.log("bonjour");
    console.log(data); return data})).subscribe(result => {
      console.log("bonjour");
      console.log(result);
    });

}


  dataReceiveWithGet() {
    console.log("méthode get invoquée maintenant")
    this.httpClient
      .get<any[]>(this.recvaddr)
      .subscribe(
        (response) => {
          this.httpresponse = response;
          console.log("réponse du serveur:")
          /*console.log(this.httpresponse);*/
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}



restRecvJSON() {/*Permet de tester le requêtes REST*/
  this.httpClient
    .get(this.recvaddr, {responseType: 'text'})
    .subscribe(
      (response) => {
        this.httpresponse=JSON.parse(response);
        console.log(response);
        /*console.log(JSON.parse(response))*/
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );

}


restSendJSON(){/*Permet de tester le requêtes REST*/
  this.httpClient
  .post(this.sendaddr, this.sejs)
  .subscribe(
    (response) => {
      this.httpresponse=[response];
      this.httpresponse=["ok"];
      console.log('Enregistrement terminé !');
    },
    (error) => {
      console.log('Erreur ! : ' + error);
    }
  );
}


restSend(){/*Permet de tester le requêtes REST*/
  this.httpClient
  .post(this.sendaddr, this.sendjson)
  .subscribe(
    (response) => {
      this.httpresponse=[response];
      this.httpresponse=["ok"];
      console.log('Enregistrement terminé !');
    },
    (error) => {
      console.log('Erreur ! : ' + error);
    }
  );
}

restRecv() {/*Permet de tester le requêtes REST*/
  this.httpClient
    .get(this.recvaddr, {responseType: 'text'})
    .subscribe(
      (response) => {
        this.httpresponse=JSON.parse(response);
        /*console.log(response);*/
        /*console.log(JSON.parse(response))*/
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );

}


toList(tabl){

var keys=Object.keys(tabl);
/**/
/*console.log(keys)*/
      var list=[];
      for(var index in keys){
        /*console.log(tabl[keys[index]])*/
        if (tabl[keys[index]] instanceof Array){/*Check the format of the array*/
          list.push(tabl[keys[index]][0])
        }
        else{
          list.push(tabl[keys[index]])/*Else it is the other format.*/
        }

      }
      /*console.log(list)*/
      return list;
    }

ngOnInit(): void {


}



}
