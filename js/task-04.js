'use strict';
let counterValue = 0;
const valueCounter = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
decrementBtn.addEventListener("click", () => {
    counterValue = counterValue - 1;
valueCounter.textContent = counterValue;});
incrementBtn.addEventListener("click", () => {
    counterValue = counterValue + 1;
valueCounter.textContent = counterValue;});