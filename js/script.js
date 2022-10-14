// OVERLAY NAV MENU SHOW HIDE

document.addEventListener('DOMContentLoaded', function () {

   const mymenubutton = document.querySelector('.menu-button');
   const mysitenav = document.querySelector('.site-header .site-nav');

   mymenubutton.onclick = function () {
      if (mysitenav.getAttribute('data-navstate') === 'open') {
          mysitenav.setAttribute('data-navstate', 'closed')
      } else {
          mysitenav.setAttribute('data-navstate', 'open')
      }
   };

});