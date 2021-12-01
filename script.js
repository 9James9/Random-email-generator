const mainContainer = document.querySelector('[data-main-container]')
const emailForm = document.querySelector('[data-gen-emails]')
const inputAmount = document.querySelector('[data-input-amount]')
const genButton = document.querySelector('[data-generate]')

function random(num){
    return Math.floor(Math.random() * num)
}

