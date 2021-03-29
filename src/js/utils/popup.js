// Points map
(function () {

  function popupToggle() {
    const popupBreakpoint = 768;

    var body = document.querySelector('body');
    var popupButtons = document.querySelectorAll('.popup__btn');
    var linksActive = document.querySelectorAll('.links__item_active');

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    for(var i = 0; i < linksActive.length; i++){
      let popup = linksActive[i].closest('.popup');
      let viewBtn = popup.querySelector('.view__btn');
      let text = linksActive[i].textContent;

      viewBtn.textContent = text;
    }

    for(var i = 0; i < popupButtons.length; i++){
      let buttons = popupButtons[i];
      let popup = buttons.closest('.popup');
      let box = popup.querySelector('.popup__box');
      let content = popup.querySelector('.popup__content');
      let close = popup.querySelector('.popup__close');

      function closePopup() {
        body.classList.remove('page-fixed');
        popup.classList.remove('popup_opened');
      }
      function openPopup() {
        body.classList.add('page-fixed');
        popup.classList.add('popup_opened');
      }

      closePopup()

      buttons.addEventListener('click', function () {
        openPopup()
      });

      close.addEventListener('click', closePopup, false);

      if (viewportWidth < popupBreakpoint) {
        // close popup when click out of block
        // box.addEventListener('click', outOfPopup, false);
      }

      function outOfPopup(e) {
        const target = e.target;

        const its_content = target == content || content.contains(target);
        const popup_is_opened = buttons.classList.contains('popup_opened');

        if (popup_is_opened && !its_content) {
          closePopup()
        }
      }
    }
  }

  popupToggle()

  window.addEventListener('resize', popupToggle, false);

})(document);