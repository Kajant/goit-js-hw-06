'use strict';
function countCategoriesNameCategoryCountElements() {
    const itemsList = document.querySelectorAll('.item');
    const categoriesNumber = itemsList.length;
    console.log(`Number of categories: ${categoriesNumber}`);
    itemsList.forEach((item) => {
        const category = item.querySelector('h2');
        const elementsNumber = item.querySelectorAll('li').length;
        console.log(`Category: ${category.textContent}`);
        console.log(`Elements: ${elementsNumber}`);
    })
}
countCategoriesNameCategoryCountElements();