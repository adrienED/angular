import { Component } from '@angular/core';
import {MOCK_RECIPES} from './recipe/recipes.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';
  recipes = MOCK_RECIPES;
}
