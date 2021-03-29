// Switch Tabs
(function () {

  function switcher() {
    const switcherBreakpoint = 768;

    // tabs elements
    const switcherButtons = document.querySelectorAll('.switch__btn');

    // desktop tabs
    switcherButtons.forEach((switcherButton) => {
      switcherButton.addEventListener('click', (e) => {
        e.preventDefault();

        const viewportWidth = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        );

        const popup = switcherButton.closest('.popup');
        const popupButton = popup.querySelector('.popup__btn');
        const switcher = switcherButton.closest('.switch');
        const container = switcher.querySelector('.switch__container');
        const items = switcher.querySelectorAll('.switch__item');
        const navButtons = switcher.querySelectorAll('.switch__btn');
        const text = switcherButton.textContent;

        const id = switcherButton.getAttribute('href');
        const activeItem = switcher.querySelector(id);
        const content = activeItem.querySelector('.switch__box');

        popupButton.textContent = text;

        for (let i = 0; i < navButtons.length; i++) {
          navButtons[i].classList.remove('switch__btn_active');
        }
        switcherButton.classList.add('switch__btn_active');

        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove('switch__item_active');
        }
        activeItem.classList.add('switch__item_active');

        container.style.minHeight = content.scrollHeight + 'px';

        if (viewportWidth < switcherBreakpoint) {
          document.querySelector('body').classList.remove('page-fixed');
          popup.classList.remove('popup_opened');

          let switcherCoord = switcher.getBoundingClientRect();
          let scrollHeight = switcherCoord.top + pageYOffset;

          window.scrollTo({
            top: scrollHeight,
            behavior: "smooth"
          });
        }
      });
    });
  }

  switcher()

  window.addEventListener('resize', switcher, false);

})(document);