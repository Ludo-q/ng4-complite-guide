import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInputServer: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputServer: ElementRef;

  @Output() ingredient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddIngredient() {
    this.ingredient.emit(new Ingredient(this.nameInputServer.nativeElement.value, this.amountInputServer.nativeElement.value));
    console.log(this.nameInputServer.nativeElement.value);
    console.log(this.amountInputServer.nativeElement.value);
  }
}
