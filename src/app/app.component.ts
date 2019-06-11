import {Component, OnInit} from '@angular/core';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe/model/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'first-app';
  recipes: Recipe[];


  constructor(private recipeService: RecipeService){
  }
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(result => this.recipes = result);
  }
}
