// Points map
(function () {

  function pointsSet() {
    var body = document.querySelector('body');
    var pointsItems = document.querySelectorAll('.figure__point');

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    for(var i = 0; i < pointsItems.length; i++){
      let items = pointsItems[i];
      let button = items.querySelector('.figure__btn');
      let popup = items.querySelector('.figure__popup');
      let content = items.querySelector('.figure__content');
      let close = items.querySelector('.figure__close');

      let popupWidth = popup.offsetWidth;
      let coords = items.getBoundingClientRect();
      let coordsLeft = coords.left;

      function closePopup() {
        body.classList.remove('page-fixed');
        items.classList.remove('figure__point_opened');
      }
      function openPopup() {
        body.classList.add('page-fixed');
        items.classList.add('figure__point_opened');
      }

      closePopup()

      if (viewportWidth > 575) {
        if ( coordsLeft < popupWidth ) {
          items.classList.add('figure__point_right');
        }
        else {
          items.classList.remove('figure__point_right');
        }
      } else {
        button.addEventListener('click', function () {
          if (items.classList.contains('figure__point_opened')) {
            closePopup()
          }
          else {
            openPopup()
          }
        });

        close.addEventListener('click', closePopup, false);

        // close popup when click out of block
        popup.addEventListener('click', outOfPopup, false);

        function outOfPopup(e) {
          const target = e.target;

          const its_content = target == content || content.contains(target);
          const popup_is_opened = items.classList.contains('figure__point_opened');

          if (popup_is_opened && !its_content) {
            closePopup()
          }
        }
      }
    }
  }

  pointsSet()

  window.addEventListener('resize', pointsSet, false);

})(document);