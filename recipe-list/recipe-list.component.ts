import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  dummyRecipe = new Recipe('Dummy', 'This is a dummy recipe', 'https://www.ge-healthahead.com/sites/default/files/Icon-Recipe.png')

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
