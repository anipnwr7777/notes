window.document.getElementById('add-task').addEventListener('click', () => {

    const listItem = document.createElement('li')
    listItem.style.display = 'flex'
    listItem.style.gap = '20px'
    const text = document.createElement('p')
    const listButton = document.createElement('button')
    listButton.innerHTML = 'Mark done'
    listItem.innerHTML = `${window.document.getElementById('todo-app-input-value').value}`
    listButton.addEventListener('click', () => {
        listItem.remove()    
    })
    // listItem.append([text, listButton])
    listItem.append(text)
    listItem.append(listButton)
    window.document.getElementById('todo-app-list').append(listItem)
})

// Add event listener to the <ul> element
// window.document.getElementById('todo-app-list').addEventListener('click', (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         const listItem = event.target.parentElement
//         listItem.remove()
//     }
// })