import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(
  {providedIn:"root"}
)
export class ModulehttpService {
  appareilsSubject = new Subject<any[]>();

  private appareillist = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  constructor(private httpClient: HttpClient) { }


  saveRecipe2Server() {
    console.log("bonjour");
    console.log("bonjour");
    this.httpClient
      .post('https://lookandcookproject.firebaseio.com/appareils.json', this.appareillist)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}



}
