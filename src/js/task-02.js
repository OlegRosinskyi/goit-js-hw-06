const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const NavIdEl = document.querySelector("#ingredients");
const lastItem = document.createElement("li");
const arrayLiElements = ingredients
  .map((ingredient) => {
    const lastItem = document.createElement("li");
    lastItem.classList.add('item')
    lastItem.textContent = ingredient;
    return lastItem;
  });
NavIdEl.append(...arrayLiElements);
  

//--------------------------------------------------------------------------
//const NavIdEl = document.querySelector("#ingredients");
//const getEl = (teg, sel) => {
 // const lastItem0 = document.createElement("li");
//lastItem0.classList.add('item')
//lastItem0.textContent = ingredients[0];
//  };
//------------------------------------------------------------------------------
//const NavIdEl = document.querySelector("#ingredients");
//const lastItem0 = document.createElement("li");
//lastItem0.classList.add('item')
//lastItem0.textContent = ingredients[0];

//const lastItem1 = document.createElement("li");
//lastItem1.classList.add('item')
//lastItem1.textContent = ingredients[1];

//const lastItem2 = document.createElement("li");
//lastItem2.classList.add('item')
//lastItem2.textContent = ingredients[2];

//const lastItem3 = document.createElement("li");
//lastItem3.classList.add('item')
//lastItem3.textContent = ingredients[3];

//const lastItem4 = document.createElement("li");
//lastItem4.classList.add('item')
//lastItem4.textContent = ingredients[4];

//const lastItem5 = document.createElement("li");
//lastItem5.classList.add('item')
//lastItem5.textContent = ingredients[5];

//NavIdEl.append(lastItem0, lastItem1, lastItem2, lastItem3, lastItem4, lastItem5);
//---------------------------------------------------------------------------------

//const colors = [
// 	{ label: "red", color: "#FF0000" },
// 	{ label: "green", color: "#00FF00" },
// 	{ label: "blue", color: "#0000FF" },
// 	{ label: "yellow", color: "#FFFF00" },
// ];

// const colorButtonElements = colors.map(({ color, label }) => {
// const colorButton = document.createElement("button");
// colorButton.style.backgroundColor = color;
// colorButton.style.margin = "px";

// colorButton.textContent = label;

// return colorButton;
// });

// body.append(...colorButtonElements);
  
//--------------------------------------------------------------------------------------
//const NavIdEl = document.querySelector("#ingredients");
// const lastItem = document.createElement("li");
//  lastItem.classList.add('item')
//  lastItem.textContent = ingredient;
 // NavIdEl.append(lastItem);
//const markup = ingredients
//  .map((ingredient) => `<li class="item">${ingredient}</li>`) //`<li class="item">${ingredient}</li>`
//  .join("");
//NavIdEl.innerHTML = markup;
//-------------------------------------------------------------------------------------
//const NavIdEl = document.querySelector("#ingredients");
//ingredients.forEach(ingredient => {
// const lastItem = document.createElement("li");
//  lastItem.classList.add('item')
//  lastItem.textContent = ingredient;
 // NavIdEl.append(lastItem);
//});
