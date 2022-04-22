const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]')


form.addEventListener('input', throttle((event) => {
    let savedValues = {}

    event.target === emailInput ? savedValues.email = event.target.value : savedValues.email = emailInput.value;
    event.target === messageInput ? savedValues.message = event.target.value : savedValues.message = messageInput.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(savedValues));   

}, 500))

const obtainedValues = localStorage.getItem("feedback-form-state");
const parsedValues = JSON.parse(obtainedValues)

function setSavedValues(valuesSet) {
    if (valuesSet) {
        valuesSet.email ? emailInput.value = valuesSet.email : emailInput.value = "";
        valuesSet.message ? messageInput.value = valuesSet.message : messageInput.value = "";
    }
};

setSavedValues(parsedValues)

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const submittedValues = {
        email: emailInput.value,
        message: messageInput.value,
    }

    console.log(submittedValues)

    form.reset();
    localStorage.clear()  
})