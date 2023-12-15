const targetDiv = document.querySelector('.target')
const list = document('.list')
const newP = document.createElement('p')
newP.textContent = "Этот текст был создан в JS"
targetDiv.append(newP)

for (let i=0; i<5;i+=1) {
    const nemLi = document.createElement('li')
    newLi.textContent = '№'+ (i+1)
    list.append(newLi)
}
