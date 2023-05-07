'use strict';
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    const formData = {
        email: email.value,
        password: password.value,
    }
        if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
        } else {
             console.log(formData);   
    }
    event.currentTarget.reset();
};
