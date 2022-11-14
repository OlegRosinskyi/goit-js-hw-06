const changeColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');
let colorSet = 0;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onWidgetElColor = (revent) => { colorSet = getRandomHexColor(); console.log(colorSet); bodyEl.style.background = colorSet; colorEl.textContent = colorSet; };

changeColorEl.addEventListener('click', onWidgetElColor)

const aEl = document.querySelector('a');
aEl.removeEventListener('click', onWidgetElColor);  
