const fontSizeControlEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
const aEl = document.querySelector('a');
//console.log(aEl);
const onFontSizeContro = (event) => { spanEl.style.fontSize = event.currentTarget.value +"px"}; //console.log(event.currentTarget.value); 
fontSizeControlEl.addEventListener('input', onFontSizeContro);
aEl.removeEventListener('click', onFontSizeContro);  
