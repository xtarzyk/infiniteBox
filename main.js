const box = document.querySelector('.box')

box.addEventListener('click', () => {
    console.log("click")
    const newBox = document.createElement('div')
    newBox.classList.add('box')
    box.appendChild(newBox)
    // box.classList.remove('box')
})