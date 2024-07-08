const menu = document.querySelector('.menu')
const nav = document.querySelector('.navbar')
const li = document.querySelector('nav')
menu.addEventListener('click',function(){
    nav.classList.toggle('aparecer-menu')
    li.addEventListener('click',()=> {
        nav.classList.remove('aparecer-menu')  
      })
})

