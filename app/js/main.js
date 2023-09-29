$('.burger').click(function () {
   $('.burger__menu').stop().fadeToggle();
   $('.burger').toggleClass('active');
});

const header = document.getElementById('header');
const burger = document.getElementById('burger');

let isRed = false;

burger.addEventListener('click', function () {
   if (isRed) {

      header.style.backgroundColor = '';
   } else {
      header.style.backgroundColor = '#110a1d';
   }

   isRed = !isRed;
});