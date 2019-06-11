import {Component, Input, OnInit} from '@angular/core';
import {MOCK_RECIPES} from './recipes.mock';
import {Recipe} from './model/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {


  @Input()
  recipe: Recipe;
  recipes = MOCK_RECIPES;

  constructor() { }
  ngOnInit() {
  }

}
