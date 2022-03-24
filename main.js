const box = document.querySelector('.box')

const addChild = event => {
    const newBox = document.createElement('div')

    newBox.classList.add('box')
    event.target.appendChild(newBox)

    event.target.removeEventListener('click', addChild)

    newBox.addEventListener('click', addChild)
}

box.addEventListener('click', addChild)