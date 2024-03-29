/*const wrapper = document.querySelector('.wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})*/

$(document).ready(function(){
  var touchStartX = 0;
  var touchEndX = 0;

  $('.carousel').on('touchstart', function(event){
    touchStartX = event.changedTouches[0].screenX;
  });

  $('.carousel').on('touchend', function(event){
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX) {
      $('.carousel').carousel('next');
    } else if (touchEndX > touchStartX) {
      $('.carousel').carousel('prev');
    }
  }
});

