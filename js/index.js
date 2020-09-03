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

//bottom buttons
const bottButt = topContainer.querySelectorAll('.btn')
console.log(bottButt)

//_____________________________________________________________

//(1)mouseover on nav bar. Change color to orange and revert
nav.addEventListener('mouseover', function (event){
    event.target.style.color = 'orange'
    setTimeout(function(){
        event.target.style.color = ''
    }, 500)
}, false)

//(2) wheel on bus picture to zoom 
busPic.addEventListener('wheel', function(event){
    event.preventDefault()
    scale += event.deltaY * -0.01
    scale = Math.min(Math.max(.125, scale), 4)
    busPic.style.transform = `scale(${scale})`
})

let scale = 1

//(3) keydown anywhere. Will alert to stop.
document.addEventListener('keydown', function(event){
    if (event.isComposing){
        return
    }
    alert ('Stop pressing keys!')
})

//(4) click on nav links to alert
nav.addEventListener('click', function (event){
    alert ('Sorry, link is unavailable at this time.')
})

//(5) dblclick ****STOP PROPAGATION 1****
topContainer.addEventListener('dblclick', function(event){
    alert ('it worked')
    event.stopPropagation()
})

// (6) load,  change background color to teal when page is loaded 
window.addEventListener('load', function (event){
    console.log('Page is fully loaded.')
})


// //(7) resize
window.addEventListener('resize', function(event){
    links.forEach (function(item){
        item.style.fontSize = '20px'
    })
})

window.onresize = event

//(8) on copy
topContainer.addEventListener('copy', function (event){
    event.target.style.color = 'orange'
})


//(9) mousedown to change text color to red
topContainer.addEventListener('mousedown', function (event){
    event.target.style.color = 'red'
})

//(10) keyup
document.addEventListener('drag', function (event){
    alert ('Leave that where you found it!')
})

//links prevent default
// links.preventDefault()

