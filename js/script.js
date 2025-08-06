const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')
const areaUl = document.querySelector('nav ul')

menu.addEventListener('click',()=>{
  nav.classList.toggle('aparecer-menu')
  
  areaUl.addEventListener('click',()=> {
    nav.classList.remove('aparecer-menu')  
    
  })
       
})

