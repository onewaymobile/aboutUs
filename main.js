var animatedEles = document.querySelectorAll('.trigger')
var screenHeight = window.innerHeight
const numCountELe = document.querySelector('.introduction__box__counting-number span')
var animatedFrists = document.querySelectorAll('.header__content .first-trigger')
var stillFirstCheck = true

// handle animated instance after opening web
animatedFrists.forEach(function(animatedFristEle){
    animatedFristEle.classList.add('start')
})

function handleNumRaisingAnmited() {
  var num = 0
  let counting = setInterval(function() {
    num += 5
    if(num <= 100) {
      numCountELe.innerHTML = num
    } else {
      clearInterval(counting)
    }
  }, 80)
}
// check scroll event when this element is show on screen
function screenCheck() {
  animatedEles.forEach(function(animatedEle){
    var rect = animatedEle.getClientRects()[0]
    var numCountELeRect = numCountELe.getClientRects()[0]
    if(!(rect.top > screenHeight - 50 || rect.bottom < 150)) {
      animatedEle.classList.add('start')
    }
    if(stillFirstCheck){
      if(!(numCountELeRect.top > screenHeight - 50 || numCountELeRect.bottom < 150)) {
        handleNumRaisingAnmited()
        stillFirstCheck = false
      } 
    }
    
  })
  animatedFrists.forEach(function(animatedFristEle){
    var rect = animatedFristEle.getClientRects()[0]
    if(!(rect.top > screenHeight - 50 || rect.bottom < 150)) {
      animatedFristEle.classList.add('start')
    } else {
      animatedFristEle.classList.remove('start')
    }
  })
}

// listen scroll event
window.onscroll = screenCheck