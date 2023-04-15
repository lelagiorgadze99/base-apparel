const emailInput = document.getElementById('email-input');
const error = document.getElementsByClassName('error-div');
const submitButton = document.getElementsByClassName('btn');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(input) {    
  if (emailRegex.test(input.value)) {
    console.log('this is true');
    input.classList.add('right');
    input.classList.remove('error');
    error.firstElementChild.style.display = "none";
    error.lastElementChild.style.display = "block";
  } else {
    console.log('this is false');
    input.classList.add('error');
    input.classList.remove('right');
    error.firstElementChild.style.display = 'block';
    error.lastElementChild.style.display = 'none'; 
  }
}



submitButton.addEventListener('click', (event)=> {
    validateEmail(emailInput);
    console.log("clicked");
  });