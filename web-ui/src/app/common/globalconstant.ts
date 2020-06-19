import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable(
  {providedIn:"root"}
)
export class GlobalConstant {

  public static USER_NAME_="defauser";
  public static PASSWORD="";
  public static IS_LOGGED_=false;
  public static BUFFER_RECIPE_=[];


  public static BASE_ADDR_="http://localhost:8080/JerseyDemo/myfridge";
  public static INGREDIENT_FIND_="http://localhost:11080/ingredients/search/";
  public static INGREDIENT_DELETE_="http://localhost:11080/ingredients/delete/";
  public static INGREDIENT_TYPE_="http://localhost:11080/ingredients/type/";
  public static INGREDIENT_PATH_="http://localhost:11080/ingredients/";

  public static HTTP_RECV_MY_INGREDIENT_=GlobalConstant.BASE_ADDR_+"/myingredient"
  public static HTTP_POST_AN_INGREDIENT_=GlobalConstant.BASE_ADDR_+"/myingredient/post";
  public static HTTP_DELETE_AN_INGREDIENT_=GlobalConstant.BASE_ADDR_+"/myingredient/delete";

  public static HTTP_RETURN_SEARCH_RESULT_=GlobalConstant.BASE_ADDR_+"/searchresult"
  public static HTTP_SEARCH_SOME_RECIPE_=GlobalConstant.BASE_ADDR_+"/searchrecipe";


  /*Permet la gestion des boutons pour poster une recette dans les favoris.*/
  public static HTTP_RECV_MY_FAVOURITE_=GlobalConstant.BASE_ADDR_+"/myfavourite"
  public static HTTP_POST_MY_FAVOURITE_=GlobalConstant.BASE_ADDR_+"/myfavourite/post"
  public static HTTP_DELETE_MY_FAVOURITE_=GlobalConstant.BASE_ADDR_+"/myfavourite/delete"

  /*Permet la gestion des boutons pour poster une recette dans les publications.*/
  public static HTTP_RECV_MY_PUBLICATION_=GlobalConstant.BASE_ADDR_+"/mypublication"
  public static HTTP_POST_MY_PUBLICATION_=GlobalConstant.BASE_ADDR_+"/mypublication/post"
  public static HTTP_DELETE_MY_PUBLICATION_=GlobalConstant.BASE_ADDR_+"/mypublication/delete"

  /*Permet la gestion des boutons pour poster ou supprimer une recette.*/
  public static HTTP_RECV_MY_RECIPE_=GlobalConstant.BASE_ADDR_+"/myrecipe"
  public static HTTP_POST_MY_RECIPE_=GlobalConstant.BASE_ADDR_+"/myrecipe/post"
  public static HTTP_DELETE_MY_RECIPE_=GlobalConstant.BASE_ADDR_+"/myrecipe/delete"












}
