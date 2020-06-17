import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
import { RecipesComponent } from './recipes/recipes.component';
import { ListingredientComponent } from './listingredient/listingredient.component';
import { MyrecipeComponent } from './myrecipe/myrecipe.component';
import {HttpClientModule} from '@angular/common/http';
import { ModulehttpService } from './modulehttp.service';
import { DatabasehttpComponent } from './databasehttp/databasehttp.component';

const appRoutes: Routes = [
  { path: 'MyRecipe', component: MyrecipeComponent },
  { path: 'SubscribePage', component: SubscribepageComponent },
  { path: 'MyFridge', component: MyfridgeComponent },
  { path: 'CreateRecipe', component: CreaterecipeComponent },
  { path: 'DisplayRecipe', component: DisplayingrecipeComponent },
  { path: 'FindRecipe', component: FindrecipeComponent },
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
      RecipesComponent,
      ListingredientComponent,
      MyrecipeComponent,
      DatabasehttpComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      HttpClientModule
   ],
   providers: [
      DatabasehttpComponent,
      ModulehttpService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
