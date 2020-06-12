import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MyfridgeComponent } from './myfridge/myfridge.component';
import { CreaterecipeComponent } from './createrecipe/createrecipe.component';
import { FindrecipeComponent } from './findrecipe/findrecipe.component';
import { DisplayingrecipeComponent } from './displayingrecipe/displayingrecipe.component';
import { Routes, RouterModule } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import { SubscribepageComponent } from './subscribepage/subscribepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListrecipeComponent } from './listrecipe/listrecipe.component';
import { TilerecipeComponent } from './tilerecipe/tilerecipe.component';
import { ListingredientComponent } from './listingredient/listingredient.component';
import { MyrecipeComponent } from './myrecipe/myrecipe.component';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'FindRecipe', component: FindrecipeComponent },
  { path: 'UserPage', component: UserpageComponent },
  { path: 'SubscribePage', component: SubscribepageComponent },
  { path: 'MyFridge', component: MyfridgeComponent },
  { path: 'CreateRecipe', component: CreaterecipeComponent },
  { path: 'LogIn', component: LoginComponent },

];


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      MyfridgeComponent,
      CreaterecipeComponent,
      FindrecipeComponent,
      DisplayingrecipeComponent,
      UserpageComponent,
      SubscribepageComponent,
      ListrecipeComponent,
      TilerecipeComponent,
      ListingredientComponent,
      MyrecipeComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
