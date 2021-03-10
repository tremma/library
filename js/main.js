$(document).ready(function () {
    // responsive menu + burger
   $('.header__burger').click(function (event) {
      $('.header__burger,.header .menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

//scroll-to-top
   const scrollSize = 100;
   const scrollUp = document.querySelector('.scroll-to-top');

   const getTop = () => window.pageYOffset || document.documentElement.scrollTop;


   window.addEventListener('scroll', () => {
      if (getTop() > scrollSize) {
         scrollUp.classList.add('show');
      } else {
         scrollUp.classList.remove('show');
      }
   });

   scrollUp.addEventListener('click', () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   });



   // animations
   //1.Добавить класс _anim-items для необходимого элемента
   //2.Прописать стили для класса _active который подставит скрипт
   //3.Класс _anim-no-hide отменяет удаление класса _active и анимация не повторяется при обратном скроле
   const animItems = document.querySelectorAll('._anim-items');

   if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);
      function animOnScroll() {
         for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
               animItem.classList.add('_active');
            }
            else {
               if (!animItem.classList.contains('_anim-no-hide')) {
                  animItem.classList.remove('_active');
               }
            }
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      setTimeout(() => {
         animOnScroll();
      }, 300);

   }


// main-slider
var swiper = new Swiper('.main-slider', {
   slidesPerView: 1,
   loop: true,
   effect: 'fade',
   autoplay: {
      delay: 8000,
    },
   pagination: {
     el: '.swiper-pagination',
     dynamicBullets: true,
   },
 });

  var newSwiper = new Swiper('.content-left-slider', {
      direction: 'vertical',
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
   loop: true,
   // effect: 'fade',
   autoplay: {
      delay: 8000,
    },
      
    });

    var commentsSwiper = new Swiper('.comments-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      loop: true,
      autoplay: {
         delay: 8000,
       },
      pagination: {
        el: '.swiper-pagination',
      },
    });

// fixed header
const header = document.querySelector('.header');

window.addEventListener('scroll', function(){
   header.classList.toggle('fixed', window.scrollY > 0);
})



// filials
 const openFilials = document.querySelector('.filials-btn'),
       filialsContent = document.querySelector('.filials__content'),
       openFilialsIcon = openFilials.querySelector('i');

       openFilials.addEventListener('click', function(){
         filialsContent.classList.toggle('active');
         openFilialsIcon.classList.toggle('hide');
       })

       const filials = [
          {
             name: 'Аккайинская с.б.',
             boss: 'Имя руководителя',
             adress: 'Аккайинская с.б. адрес',
             phone: 'номер телефона',
             info: 'Некая текстовая информация',
             imgSrc: 'номер телефона'
          }
       ]


//        filials.forEach(function(filial){
//          filial.addEventListener('click', function(e){
      
//             filials.forEach(function(filial){
//                filial.classList.remove('active');
//       })

//       this.classList.add('active');
//       let currentName = this.dataset.region;

//       images.forEach(function(img){
//          let imgName = img.dataset.name;

//          img.classList.remove('active');
//          if(currentName === imgName){
//             img.classList.add('active');
//             console.log(img)
//          }
       
         
//       })

//       infoBlocks.forEach(function(block){
//          block.classList.remove('active');

//          let blockName = block.dataset.region;

//          if(currentName === blockName){
//             block.classList.add('active');
//          }
//       })
      
//    })
// })


})