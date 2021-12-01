const mainContainer = document.querySelector('[data-main-container]')
const emailForm = document.querySelector('[data-gen-emails]')
const inputAmount = document.querySelector('[data-input-amount]')
const genButton = document.querySelector('[data-generate]')

function random(num){
    return Math.floor(Math.random() * num)
}

(function addListeners(){
    //prevents page from refreshing when button is pressed
    genButton.addEventListener('click', e => {
        e.preventDefault()
    })
    //genButton.addEventListener('click', displayEmails)

})()

function displayEmails(x){
    
}
function randomValues(num){
    let output = ''
    const values = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    for (let i = 0; i < num; i++) {
        output += values[random(36)]
    }
    return output
}
