const formEl = document.querySelector('.login-form');
const onFormElSubmit = (event) => {
  
  event.preventDefault();
  //console.log(event);

    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
       
    return  alert("Please fill in all the fields!");
  } 

 // console.log(`email: ${email.value}, Password: ${password.value}`);
  const formData = {
    email,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();
};
formEl.addEventListener('submit', onFormElSubmit);
 
const aEl = document.querySelector('a');
aEl.removeEventListener('click', onFormElSubmit);  
