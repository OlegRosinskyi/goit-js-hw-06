const formEl = document.querySelector('.login-form');
const onFormElSubmit = (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
       
    return  alert("Please fill in all the fields!");
  } 

 console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};
 formEl.addEventListener('submit', onFormElSubmit);
//if (event.currentTarget.value === "")  output.textContent = "Anonymous"; 
 //   else  output.textContent = event.currentTarget.value ;