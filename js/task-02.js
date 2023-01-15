const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

for (const ingredient of ingredients) {

  const itemEl = document.createElement('li');
  console.log(itemEl);

  itemEl.textContent = ingredient;

  itemEl.className = 'item';

  listEl.append(itemEl);
}

console.log(listEl);