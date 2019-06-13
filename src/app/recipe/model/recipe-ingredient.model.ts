import { IngredientModel } from './ingredient.model';

export class RecipeIngredientModel {
  ingredient: IngredientModel;
  quantity: number;
  unit: string;

constructor(ingredient: IngredientModel, quantity: number, unit: string){
  this.ingredient = ingredient;
  this.quantity = quantity;
  this.unit = unit;
}

}
