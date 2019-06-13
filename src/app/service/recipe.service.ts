import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Recipe} from '../recipe/model/recipe.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  constructor(private http: HttpClient) {
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://10.0.1.64:8080/api/v1/recipes');
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>('http://10.0.1.64:8080/api/v1/recipes/' + id);
  }
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>('http://10.0.1.64:8080/api/v1/recipes/', recipe);
  }
  deleteRecipe(id: string): Observable<any> {
    return this.http.delete('http://10.0.1.64:8080/api/v1/recipes/' + id);
  }
}
