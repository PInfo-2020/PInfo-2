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
  public httpsend;
  public httpresponse=[];

  constructor(private httpClient: HttpClient) { }


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
          console.log(this.httpresponse);
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
          console.log(this.httpresponse);
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
        console.log(response);
        console.log(JSON.parse(response))
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
