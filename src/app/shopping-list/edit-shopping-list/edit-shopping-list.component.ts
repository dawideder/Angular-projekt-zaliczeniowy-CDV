import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { Ingredient } from '../../.shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {
  // @Output() ingredientAdded = new EventEmitter<Ingredient>() 
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() { }

  onAddIngredient(nameInput: HTMLInputElement) {
    const newIngredient = new Ingredient(
      nameInput.value, 
      this.amountInput.nativeElement.value
    );
    // this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);

  }


}
