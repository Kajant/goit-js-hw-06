'use strict';
const sizeControler = document.querySelector('#font-size-control');
const magicText = document.querySelector('#text');
sizeControler.addEventListener('input', () => {
    magicText.style.fontSize = `${sizeControler.value}px`;
});