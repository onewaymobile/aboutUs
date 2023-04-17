var animatedEles = document.querySelectorAll('.trigger')
var screenHeight = window.innerHeight
const numCountELe = document.querySelector('.introduction__box__counting-number span')
var animatedFrists = document.querySelectorAll('.header__content .first-trigger')
var stillFirstCheck = true
var a = 150;
var b = 250;
var companyName = document.querySelector(".company-name")

if (window.innerWidth < 768) {
  companyName.classList.remove("trigger")
  a = 0;
  b = 0;
} else {

}
// handle animated instance after opening web
animatedFrists.forEach(function(animatedFristEle){
    animatedFristEle.classList.add('start')
})

function handleNumRaisingAnmited() {
  var num = 0
  setTimeout(function(){
    let counting = setInterval(function() {
      num += 2
      if(num <= 100) {
        numCountELe.innerHTML = num
      } else {
        clearInterval(counting)
      }
    }, 16)
  },400)
}
// check scroll event when this element is show on screen
function screenCheck() {
  animatedEles.forEach(function(animatedEle){
    var rect = animatedEle.getClientRects()[0]
    var numCountELeRect = numCountELe.getClientRects()[0]
    if(!(rect.top > screenHeight - b || rect.bottom < a)) {
      animatedEle.classList.add('start')
    }
    if(stillFirstCheck){
      if(!(numCountELeRect.top > screenHeight - a || numCountELeRect.bottom < a)) {
        handleNumRaisingAnmited()
        stillFirstCheck = false
      } 
    }
    
  })
  animatedFrists.forEach(function(animatedFristEle){
    var rect = animatedFristEle.getClientRects()[0]
    if(!(rect.top > screenHeight - 000 || rect.bottom < 150)) {
      animatedFristEle.classList.add('start')
    } else {
      animatedFristEle.classList.remove('start')
    }
  })
}

// listen scroll event
window.onscroll = screenCheck