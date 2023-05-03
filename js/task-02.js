'use strict';
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
for (const ingredient of ingredients) {
  const ingredientOnList = document.createElement('li');
  ingredientOnList.textContent = ingredient;
  ingredientOnList.classList.add('item');
  ingredientsList.append(ingredientOnList);
}