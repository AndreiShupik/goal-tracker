const form = document.querySelector('#form')

const formTop = document.querySelector('.form__top')
const userName = document.querySelector('#name')

const formMiddle = document.querySelector('.form__middle')
const password = document.querySelector('#password')

// Checking login and password---------------------------------------

form.addEventListener('submit', (e) => {

    // Checking ligin---------------------------------------------------
    /* 'Email isn't correct' 
     */

    let messages = []
    if (userName.value === '' || userName.value == null) {
        messages.push('Name is required')
    }

    // Checking password---------------------------------------------------
    /* 'Password isn't correct' 
     */

    if (password.value.length <= 5) {
        messages.push('Password must be more 5 characters')
    }

    if (password.value.length > 20) {
        messages.push('Password must be less than 20 characters')
    }

    if (messages.length > 0) {
        e.preventDefault()
        const errors = document.querySelectorAll('.error')
        if (errors.length > 0) {
            for (error of errors) {
                error.nextElementSibling.querySelector('input').style.border = 'none'
                error.remove()
            }
        }

        for (message of messages) {
            let error = document.createElement('div')
            error.className = 'error'
            error.textContent = message
            if (message == 'Name is required') {
                formTop.prepend(error)
                userName.style.border = '#fd101d 2px solid'
            } else {
                formMiddle.prepend(error)
                password.style.border = '#fd101d 2px solid'
            }
        }
    }
})