const targetDiv = document.querySelector('.target')

const newP = document.createElement('p')
newP.textContent = "Этот текст был создан в JS"
targetDiv.append(newP)