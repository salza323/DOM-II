// Your code goes here

//header
const header = document.querySelector('.main-navigation')
console.log(header)

//navigation bar
const nav = header.querySelector('.nav')
console.log(nav)

//navigation links
const links = nav.querySelectorAll('.nav-link')
console.log(links)

//top container
const topContainer = document.querySelector('.container.home')
console.log(topContainer)

//intro
const intro = topContainer.querySelector('.intro')
console.log(intro)

//bus picture
const busPic = intro.querySelector('img')
console.log(busPic)

//_____________________________________________________________------

//(1)mouseover on nav bar. Change color to orange and revert

nav.addEventListener('mouseover', function (event){
    event.target.style.color = 'orange'
    setTimeout(function(){
        event.target.style.color = ''
    }, 500)
}, false)

//(2)