import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../.shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Daddario',
      'Loved by so many',
      'https://live.staticflickr.com/65535/49111382786_90a41f7d61.jpg',
      [
        
      ]),
    new Recipe('Elixir',
    'Modern sound, modern classic',
    'https://live.staticflickr.com/7831/45952796945_fecc25052f_b.jpg',
    [
      

    ]), 

    new Recipe('Ernie Ball',
      'Pure Legend',
      'https://strunygitarowe.pl/userdata/public/gfx/5525/Struny-Ernie-Ball-Short-Scale-Regular-Slinky-Bass-Nickel-Wound-45-105-2852.jpg',
      [


      ])

  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    // call slice to get a copy of the array, to prevent changing our og recipe list.
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}