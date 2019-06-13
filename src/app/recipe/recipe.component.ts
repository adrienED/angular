import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './model/recipe.model';
import {RecipeService} from '../service/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {


  @Input()
  recipe: Recipe;
  visible = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipe(this.recipe.id.toString()).subscribe(result => console.log(result.name));
  }

  ToggleVisibility() {
    this.visible = ! this.visible;
  }

}
