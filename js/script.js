// OVERLAY NAV MENU SHOW HIDE

document.addEventListener('DOMContentLoaded', function() {

   const mymenubutton = document.querySelector('.menu-button');
   const mysitenav = document.querySelector('.site-header .site-nav');

   mymenubutton.onclick = function() {
      if (mysitenav.getAttribute('data-navstate') === 'open') {
          mysitenav.setAttribute('data-navstate', 'closed');
      } else {
          mysitenav.setAttribute('data-navstate', 'open');
      }
   };

});

// REVEAL ON SCROLL JS
// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
let options = {
    threshold: .25
}

const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute('data-sectionstate', 'active');
        } else {
            entry.target.setAttribute('data-sectionstate', 'inactive');
        }
    });
}, options);

document.querySelectorAll('.animate-on-scroll').forEach((section) => {
    myobserver.observe(section);
});