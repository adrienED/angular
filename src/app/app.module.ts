import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import { RecipeComponent } from './recipe/recipe.component';

import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { RecipesComponent } from './recipes/recipes.component';

import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipesComponent

  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
