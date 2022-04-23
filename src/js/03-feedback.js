const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmitBtn);
form.addEventListener('input', throttle(onInputEvent, 500))

toFillInput() 

function onInputEvent (event) {
    let inputData = {};

    formData = new FormData(form)

    formData.forEach((value, key) => {
    inputData[key] = value
})
    
    localStorage.setItem('feedback-form-state', JSON.stringify(inputData))
}


function toFillInput () {
    const savedData = localStorage.getItem("feedback-form-state")
    const parsedData = JSON.parse(savedData)
    
    if(!parsedData) return;
    Object.keys(parsedData).forEach(element => 
    form[element].value = parsedData[element])
    
}

function onSubmitBtn (event) {
    event.preventDefault()
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')))

    form.reset()
    localStorage.clear()
}

