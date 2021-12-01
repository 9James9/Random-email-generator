const mainContainer = document.querySelector('[data-main-container]')
const emailForm = document.querySelector('[data-gen-emails]')
const inputAmount = document.querySelector('[data-input-amount]')
const genButton = document.querySelector('[data-generate]')
const resultContainer = document.querySelector('[data-output]')
function random(num){
    return Math.floor(Math.random() * num)
}

(function addListeners(){
    genButton.addEventListener('click', e => {
        e.preventDefault()
        displayEmails(inputAmount.value)
    })
})()

function displayEmails(x){
    let output = [genEmails(x)]
    for (let i = 0; i < x; i++){
        newResult(output[0][i])
    }
}
function newResult(result){
    //adds result into a new div
    let newDiv = document.createElement('div')
    resultContainer.appendChild(newDiv)
    newDiv.textContent = result

}
function randomValues(num){
    let output = ''
    const values = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    for (let i = 0; i < num; i++) {
        output += values[random(36)]
    }
    return output
}
function genEmails(num){
    //outputs x random emails
    let emails = []
    for (let i = 0; i < num; i++){
        emails.push(`${randomValues(8)}@gmail.com`)
    }
    return emails
}