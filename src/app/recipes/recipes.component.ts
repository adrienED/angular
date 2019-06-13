import { Component, OnInit } from '@angular/core';
import {RecipeComponent} from '../recipe/recipe.component';
import {RecipeService} from '../service/recipe.service';
import {Recipe} from '../recipe/model/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(result => this.recipes = result);
  }
}
