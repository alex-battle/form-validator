// Pull in DOM elements 
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show input Error message
function showError(input, message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// Show success outline
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className='form-control success'
}

// Event Listener for the form when we submit it
form.addEventListener('submit', function(e){
   e.preventDefault()
   console.log(username.value, email.value, password.value)
   if(username.value === ''){
       showError(username, 'Username is required')
   } else{
       showSuccess(username)
    }
})