//const mainContainer = document.querySelector('[data-main-container]')
//const emailForm = document.querySelector('[data-gen-emails]')
const inputAmount = document.querySelector('[data-input-amount]')
const genButton = document.querySelector('[data-generate]')
const resultContainer = document.querySelector('[data-output]')
const clearBtn = document.querySelector('[data-clear]')
function random(num){
    return Math.floor(Math.random() * num)
}

(function addListeners(){
    genButton.addEventListener('click', e => {
        e.preventDefault()
        displayEmails(inputAmount.value)
    })
    clearBtn.addEventListener('click', () => {
        resultContainer.textContent = ""
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
        emails.push(`${randomValues(8)}${randomAtValue()}`)
    }
    return emails
}
function randomAtValue(){
    let choice = random(5)
    let value = ""
    switch(true) {
        case choice == 0:
            value += '@gmail.com'
            break
        case choice == 1:
            value += '@hotmail.com'
            break
        case choice == 2:
            value += '@AOL.com'
            break
        case choice == 3:
            value += '@icloud.com'
            break
        case choice == 4:
            value += '@gmail.com'
            break
    }
    return value
}