const registrationForm = document.querySelector('#registrationForm')
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const conformPassword = document.getElementById('confirmPassword');
const phone = document.getElementById('phone');

const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const conformPasswordError = document.getElementById('confirmPasswordError');
const phoneError = document.getElementById('phoneError');
const submitBtn = document.getElementById('submitBtn');

console.log(emailError)
function validation() {
    let valid = true 
    if(name.value.trim().length < 3){
        nameError.textContent='please enter valied name';
        valid = false;
    }else{
        nameError.textContent ='';
    }
    const emailPAttern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPAttern.test(email.value)){
        emailError.textContent="Please enter valid email"
        valid = false
    }else{
        emailError.textContent=""
    }
    const passPAttern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
    if(!passPAttern.test(password.value)){
        passwordError.textContent=" Enter  valied password"
        valid = false
    }else{
        passwordError.textContent= ""
    }

    if(conformPassword.value !== password.value){
        conformPasswordError.textContent = "password not match"
        valid = false;
    }else{
        conformPasswordError.textContent = ""
    }

    const phoneNumberPattern = /^[6-9]\d{9}$/
    if(!phoneNumberPattern.test(phone.value)) {
        phoneError.textContent = "Enter 10 digit Number"
        valid = false
    }else{
        phoneError.textContent ="";
    }
    submitBtn.disabled = !valid;
    return valid
}

[name, email, password, conformPassword, phone].forEach((input)=>{
    console.log(input)
    input.addEventListener('input', validation)

})

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitBtn.disabled = true 
    alert('Register successfully')
})