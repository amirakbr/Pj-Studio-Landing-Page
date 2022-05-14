/*nav = document.querySelector('.hero') ;
navTop = nav.offsetTop + 20 ;
const  navbarshaddow = document.querySelector('.navbar') ;
function fixedNav(e) {
  if (window.scrollY >= navTop) {    
    navbarshaddow.classList.add('navbar__shaddow') ;
  } else {
    navbarshaddow.classList.remove('navbar__shaddow') ;
  }
  console.log(window.scrollY);
  if(window.scrollY >= 0){
    document.querySelector('.process__container').classList.add('process__anim') ;
    document.querySelector('.process').classList.remove('hidden') ;
  }
  if (window.scrollY >= 470) {
    document.querySelector('.feature').classList.remove('hidden') ; 
    console.log("hidfd");
    document.querySelector('.phone__container').classList.add('move__left__animate') ; 
    document.querySelector('.feature__content').classList.add('move__right__animate') ;
  }
  if(window.scrollY >= 1250) {
    document.querySelector('.custom').classList.remove('hidden') ; 
    document.querySelector('.custom__left').classList.add('move__left__animate') ; 
    document.querySelector('.custom__right').classList.add('move__right__animate') ;
  }
  if(window.scrollY >= 1850) {
    document.querySelector('.web--dev').classList.remove('hidden') ; 
    document.querySelector('.web--dev__left').classList.add('move__left__animate') ; 
    document.querySelector('.web--dev__right').classList.add('move__right__animate') ;
  }
  if(window.scrollY >= 2450) {
    document.querySelector('.register').classList.remove('hidden') ; 
    document.querySelector('.register__container').classList.add('scale__aniamtion') ; 
  }
}

window.addEventListener('scroll', fixedNav);



const preloader = document.querySelector('.pre--loader') ;
function getBgUrl(el) {
  var bg = "";
  if (el.currentStyle) { // IE
      bg = el.currentStyle.backgroundImage;
  } else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
      bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
  } else { // try and get inline style
      bg = el.style.backgroundImage;
  }
  return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
}

var image = document.createElement('img');
image.src = getBgUrl(document.getElementById('test-bg'));
image.onload = function () {
  console.log('hi');
  preloader.classList.add('hidden') ;
};
*/