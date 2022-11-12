const inputEl = document.querySelector("#controls input");
const dataBtnEl = document.querySelectorAll("#controls button");
const dataCreateBtnEl = dataBtnEl[0];
const dataDestroyBtnEl = dataBtnEl[1];

const boxesEl = document.querySelector("#boxes")
let numberElements = 0;
let arrayElements = [];

const onInputEl = (event) => {
   event.preventDefault();
  numberElements = event.currentTarget.value;
  console.log(numberElements);
};
  
inputEl.addEventListener('input', onInputEl);

const ondataCreateBtn = (event) => {
  
  for (let i = 0; i < numberElements; i += 1) { arrayElements[i] = `<div> Element:  ${i} </div>` }; 
 
  boxesEl.innerHTML = arrayElements;

};
dataCreateBtnEl.addEventListener('click', ondataCreateBtn);

const onddataDestroyBtn = (event) => { 
 
  boxesEl.innerHTML = [];
};

dataDestroyBtnEl.addEventListener('click', onddataDestroyBtn);

//const aEl = document.querySelector('a');
//aEl.removeEventListener('click', onInputEl);  
