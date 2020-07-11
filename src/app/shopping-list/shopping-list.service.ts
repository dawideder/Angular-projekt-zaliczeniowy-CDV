import { EventEmitter } from "@angular/core";

import { Ingredient } from "../.shared/ingredients.model";

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Elixir', 2),
    new Ingredient('Daddario', 2)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // this.ingredients = this.ingredients.concat(ingredients); // OR ES6...
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}