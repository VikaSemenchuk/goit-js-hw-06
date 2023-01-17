const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById('ingredients');

const listContent = ingredients.map(ingredient => {

  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');

  return itemEl;
})

listEl.append(...listContent);


// const listContent = [];

// for (const ingredient of ingredients) {

//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
//   itemEl.classList.add('item');

//   listContent.push(itemEl);
// }
// listEl.append(...listContent);
