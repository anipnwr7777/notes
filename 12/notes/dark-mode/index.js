// window.document.getElementById('click-me-button').onclick(() => {
//     window.document.body.style.backgroundColor = 'black'
// })

// const turnBlack = () => {
//     window.document.body.style.backgroundColor = 'black'
// }

// function turnBlack () {
//     window.document.body.style.backgroundColor = 'black'
// }

const button = document.getElementById('click-me-button')

let currentState = 'white'

button.addEventListener('click', function () {
    if (currentState === 'white') {
        window.document.body.style.backgroundColor = 'black'
        currentState = 'black'
    } else {
        window.document.body.style.backgroundColor = 'white'
        currentState = 'white'
    }
})