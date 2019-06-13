import { RecipeIngredientModel } from './recipe-ingredient.model';

export class Recipe {
  id: string;
  name: string;
  picture: string;
  description: string;
  ingredients: RecipeIngredientModel[];
  instructions: string[];


  constructor(name: string, picture: string, description: string, ingredients: RecipeIngredientModel[], instructions: string[]) {
  this.name = name;
  this.picture = picture;
  this.description = description;
  this. ingredients = ingredients;
  this.instructions = instructions;
  }
}
