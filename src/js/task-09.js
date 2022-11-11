const widgetEl = document.querySelector('.widget');
const colorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');
let colorSet = 0;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onWidgetElColor = (revent) => { colorSet = getRandomHexColor(); console.log(colorSet); bodyEl.style.background = colorSet; colorEl.textContent = colorSet; };

widgetEl.addEventListener('click', onWidgetElColor)

