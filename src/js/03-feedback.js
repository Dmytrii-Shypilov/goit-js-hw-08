const throttle = require('lodash.throttle');

const formElement = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messsageInput = document.querySelector('[name="message"]')

console.log(throttle)

emailInput.addEventListener('input', (event) => {

})

messsageInput.addEventListener('input', (event) => {

})

_.throttle(func, [wait=0], [options={}])