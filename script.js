const left = document.querySelector('.left')
const right = document.querySelector('.right')
const image = document.querySelector('.image')
const imageContainer = document.querySelector('.image-container')
const textData = document.querySelectorAll('[data-text]')
const imageData = document.querySelectorAll('[data-tag]')
console.log(textData,imageData)

let counter = 0
let imageWidth = image.clientWidth
left.addEventListener('click',()=>{
    if(counter >=2) return
    imageContainer.style.transition = 'transform 0.3s ease'
    counter ++
    imageContainer.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)'
    console.log(counter)
    textData.forEach(text=>{
      text.classList.remove('active')
    })
    textData[counter].classList.add('active')
})

  right.addEventListener('click',()=>{
         if(counter <=0) return
       imageContainer.style.transition = 'transform 0.3s ease'
       counter --
       imageContainer.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)'
       console.log(counter)
       textData.forEach(text=>{
        text.classList.remove('active')
      })
      textData[counter].classList.add('active')
  })