import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable(
  {providedIn:"root"}
)
export class GlobalConstant {

  public static USER_NAME_="";
  public static PASSWORD="";
  public static IS_LOGGED_=false;
  public static BUFFER_RECIPE_=[];


  public static HTTP_RECV_MY_INGREDIENT_="http://localhost:8080/JerseyDemo/myfridge/myingredient"
  public static HTTP_POST_AN_INGREDIENT_="http://localhost:8080/JerseyDemo/myfridge/myingredient/post";
  public static HTTP_DELETE_AN_INGREDIENT_="http://localhost:8080/JerseyDemo/myfridge/myingredient/delete";

  public static HTTP_RETURN_SEARCH_RESULT_="http://localhost:8080/JerseyDemo/myfridge/searchresult"
  public static HTTP_SEARCH_SOME_RECIPE_="http://localhost:8080/JerseyDemo/myfridge/searchrecipe";


  /*Permet la gestion des boutons pour poster une recette dans les favoris.*/
  public static HTTP_RECV_MY_FAVOURITE_="http://localhost:8080/JerseyDemo/myfridge/myfavourite"
  public static HTTP_POST_MY_FAVOURITE_="http://localhost:8080/JerseyDemo/myfridge/myfavourite/post"
  public static HTTP_DELETE_MY_FAVOURITE_="http://localhost:8080/JerseyDemo/myfridge/myfavourite/delete"

  /*Permet la gestion des boutons pour poster une recette dans les publications.*/
  public static HTTP_RECV_MY_PUBLICATION_="http://localhost:8080/JerseyDemo/myfridge/mypublication"
  public static HTTP_POST_MY_PUBLICATION_="http://localhost:8080/JerseyDemo/myfridge/mypublication/post"
  public static HTTP_DELETE_MY_PUBLICATION_="http://localhost:8080/JerseyDemo/myfridge/mypublication/delete"

  /*Permet la gestion des boutons pour poster ou supprimer une recette.*/
  public static HTTP_RECV_MY_RECIPE_="http://localhost:8080/JerseyDemo/myfridge/myrecipe"
  public static HTTP_POST_MY_RECIPE_="http://localhost:8080/JerseyDemo/myfridge/myrecipe/post"
  public static HTTP_DELETE_MY_RECIPE_="http://localhost:8080/JerseyDemo/myfridge/myrecipe/delete"





  /*My recipe.*/
  public static HTTP_SEND_MY_FAVOURITE_="https://lookandcookproject.firebaseio.com/users/defaultuser/myfavourite.json";
  public static HTTP_SEND_MY_PUBLICATION_="https://lookandcookproject.firebaseio.com/users/defaultuser/mypublication.json";
  public static HTTP_SEND_MY_RECIPE_="https://lookandcookproject.firebaseio.com/users/defaultuser/myrecipe.json"

  /*My fridge.*/
  public static HTTP_SEND_MY_INGREDIENT_="https://lookandcookproject.firebaseio.com/users/defaultuser/myingredient.json"



  public static siteTitle: string = "This is example of ItSolutionStuff.com";
  public static MY_FRIDGE_="";
  public static PUBLISHED_RECIPE_ = [
    {
      descriptiontext: "très bon",
      grade: "4",
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      ingredientlist: [],
      name: "sauté vauddfgdfgdfggr",
      personnumber: "10",
      preptext: "dd",
      preptime: "dd"
    }


];




/*var k=jsonRecipe("desc","im","inli","na","prtx","prti")*/
jsonRecipe(desc,im,inli,na,prtx,prti){
  return {descriptiontext: desc,image: im,ingredientlist: inli,name: na,preptext: prtx,preptime: prti}
}


  public static BUFFER_SERVER_=[];


  public static FAVOURITE_RECIPE_ = [
    {
    descriptiontext: "très bon",
    grade: "4",
    image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
    ingredientlist: [],
    name: "sauté vaud",
    personnumber: "10",
    preptext: "dd",
    preptime: "dd"
  }

  ];


  public static INGREDIENT_LIST_= [
    {
      image:'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Persil',
      quantity: '200gr',
      unit:10
    },
    {
      image:'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Sauté vaud',
      quantity: '600gr',
      unit:8
    },
    {
      image:'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Ragout boeuf',
      quantity: '800gr',
      unit: 4
    },
    {
      image:'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Hot dog',
      quantity: '200gr',
      unit: 2
    }
  ];


  public static CREATE_RECIPE_=[];

  public static SEARCHED_RECIPE_= [
    {
      descriptiontext: "très bon",
      grade: "4",
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      ingredientlist: [],
      name: "sauté vaudrdgddrtdrggdrg",
      personnumber: "10",
      preptext: "dd",
      preptime: "dd"
    },
    {
      descriptiontext: "très bon",
      grade: "4",
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      ingredientlist: [],
      name: "shzgfs uszgfuzse",
      personnumber: "10",
      preptext: "dd",
      preptime: "dd"
    }
  ];





  public static MY_RECIPE_ = [
    {
      descriptiontext: "très bon",
      grade: "4",
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      ingredientlist: [],
      name: "sauté vaud",
      personnumber: "10",
      preptext: "dd",
      preptime: "dd"
    }

];









  public static DISPLAYING_RECIPE_ = [
    {
      id:1,
      image:'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Persil',
      quantity: '200gr',
      unit:10
    },
    {
      id:2,
      image:'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Sauté vaud',
      quantity: '600gr',
      unit:8
    },
    {
      id:3,
      image:'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Ragout boeuf',
      quantity: '800gr',
      unit: 4
    },
    {
      id:4,
      image:'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Hot dog',
      quantity: '200gr',
      unit: 2
    }
  ];

  /*constructor(private httpClient: HttpClient) { }
  dataSendWithPut(httpaddress,sendjson) {
    this.httpClient
      .put(httpaddress, sendjson)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
  private httpresponse=[];



  dataReceiveWithGet(recvaddr) {
    this.httpClient
      .get<any[]>(recvaddr)
      .subscribe(
        (response) => {
          this.httpresponse = response;
          return this.httpresponse;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}*/
















}
