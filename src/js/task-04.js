let counterValue = 0;
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const value = document.querySelector("#value");
const decrement = () => { counterValue -= 1; value.textContent = counterValue; };
decrementBtn.addEventListener("click", decrement);
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const increment = () => { counterValue += 1; value.textContent = counterValue; };  
incrementBtn.addEventListener("click", increment);
