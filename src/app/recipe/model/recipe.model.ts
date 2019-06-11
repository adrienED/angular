import { RecipeIngredientModel } from './recipe-ingredient.model';

export class Recipe {
  name: string;
  picture: string;
  description: string;
  ingredients: RecipeIngredientModel[];
  instructions: string[];
}
