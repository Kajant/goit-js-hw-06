'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const changeColor = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}

btn.addEventListener('click', changeColor );

