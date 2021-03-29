// // Slide toggle
// (function () {
//   // Detect touch devices
//   var slideItems = document.querySelectorAll('.nav__prod-header');
//   var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//
//   function slideToggle() {
//     for(var i = 0; i < slideItems.length; i++){
//       let item = slideItems[i];
//
//       item.addEventListener('click', function () {
//         console.log('sdfsdf');
//         let parent = this.closest('.nav__prod-item');
//         let content = parent.querySelector('.nav__prod-content');
//
//         if (viewportWidth < 1200) {
//           if (item.classList.contains('nav__prod-header_opened')) {
//             parent.classList.remove('nav__prod-header_opened');
//           }
//           else {
//             parent.classList.add('nav__prod-header_opened');
//           }
//         }
//       });
//     }
//   }
//
//   slideToggle()
//
//   window.addEventListener('resize', slideToggle, false);
//
// })(document);