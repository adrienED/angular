import { Component, OnInit } from '@angular/core';
import {RecipeComponent} from '../recipe/recipe.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(recipeComponent: RecipeComponent) { }

  ngOnInit() {}


}
