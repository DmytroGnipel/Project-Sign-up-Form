
const passwordFields = document.getElementsByClassName('error')

passwordFields[0].addEventListener('blur', function(){
    warning(this)
})

passwordFields[1].addEventListener('blur', function(){
    warning(this)
})

function warning(currentField) {
    const oldWarning = document.querySelector('.warning')
    if (oldWarning) {
        oldWarning.remove()
        passwordFields[0].setCustomValidity("")
            passwordFields[1].setCustomValidity("")
    }
    if (passwordFields[0].value && passwordFields[1].value) {
        if (passwordFields[0].value !== passwordFields[1].value) {
            const warning = document.createElement('p')
            warning.innerHTML = "passwords don't match"
            warning.classList.add('warning')
            currentField.insertAdjacentElement("afterend", warning)
            passwordFields[0].setCustomValidity("Invalid field.")
            passwordFields[1].setCustomValidity("Invalid field.")
        }
    }
}



