const inputEl = document.querySelector("#validation-input");
const dataAllA = inputEl.attributes ;//getAttribute(DataTransfer);
console.log(dataAllA);
const dataLength = inputEl.getAttribute('data-length') ;//getAttribute(DataTransfer);
console.log(Number(dataLength));
const onInputEl = (event) => {
    if (event.currentTarget.value.length === Number(dataLength)) {
        if (inputEl.classList.contains('invalid')) { inputEl.classList.replace('invalid', 'valid');} 
        else { if (!(inputEl.classList.contains('valid'))) { inputEl.classList.add('valid'); }; };}
    else {
        if (inputEl.classList.contains('valid')) { inputEl.classList.replace('valid', 'invalid'); } 
        else { if (!(inputEl.classList.contains('invalid'))) { inputEl.classList.add('invalid'); }; };}
}; //if(event.currentTarget.value.length === dataLength) {console.log('All ryte')} else console.log('All not ryte')
inputEl.addEventListener('blur', onInputEl);