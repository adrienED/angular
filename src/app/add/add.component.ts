import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../service/recipe.service';
import {Recipe} from '../recipe/model/recipe.model';
import {RecipeIngredientModel} from '../recipe/model/recipe-ingredient.model';
import {IngredientModel} from '../recipe/model/ingredient.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  recipeGroup: FormGroup;

  name = new FormControl('');
  picture = new FormControl('');
  ingredients: IngredientModel = new IngredientModel('test');
  description = 'test';
  recipeIngredient: RecipeIngredientModel = new RecipeIngredientModel(this.ingredients, 23, 'oz');
  recipeIn: RecipeIngredientModel[] = [this.recipeIngredient];
  instruction: string[] = ['test'];

  recipe: Recipe = new Recipe(this.name.value, this.picture.value, 'lalalal', this.recipeIn, this.instruction);

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  createForm() {
    this.recipeGroup = this.formBuilder.group({name: ['', Validators.required], picture: '', description: ''});
  }

  addRecipe() {
    const value = this.recipeGroup.value;
    const recipe: Recipe = {
      id: '',
      name: value.name,
      picture: value.picture,
      description: value.description,
      ingredients: value.ingredients,
      instructions: value.instructions
    };
  }
}
