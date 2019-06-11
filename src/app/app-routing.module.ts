import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

const routes: Routes = [

  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})


export class AppRoutingModule { }
