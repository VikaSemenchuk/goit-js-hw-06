const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

for (const category of categoriesEl) {
    
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.childElementCount);

    // const elementsEl = category.querySelectorAll('li')
    // console.log('Elements:', elementsEl.length);
}