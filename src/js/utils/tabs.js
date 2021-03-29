// Tabs / Mobile-Accordion
(function () {
  const tabsBreakpoint = 767;

  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  // tabs elements
  const tabsElements = document.querySelectorAll('.tabs');

  const tabsButtonsNav = document.querySelectorAll('.tabs__nav .tabs__btn');

  // desktop tabs
  tabsButtonsNav.forEach((tabsButtonNav) => {
    tabsButtonNav.addEventListener('click', (e) => {
      e.preventDefault();

      const tabs = tabsButtonNav.closest('.tabs');
      const container = tabs.querySelector('.tabs__container');
      const items = tabs.querySelectorAll('.tabs__item');
      const navButtons = tabs.querySelectorAll('.tabs__nav .tabs__btn');

      const id = tabsButtonNav.getAttribute('href');
      const activeItem = tabs.querySelector(id);
      const content = activeItem.querySelector('.tabs__box');

      for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].classList.remove('tabs__btn_active');
      }
      tabsButtonNav.classList.add('tabs__btn_active');

      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('tabs__item_active');
      }
      activeItem.classList.add('tabs__item_active');

      container.style.minHeight = content.scrollHeight + 'px';
    });
  });

  // all inner buttons
  const tabsButtons = document.querySelectorAll('.tabs__item .tabs__btn');

  tabsButtons.forEach((tabsButton) => {
    const tabsContainer = tabsButton.closest('.tabs__container');
    const tabsItem = tabsButton.closest('.tabs__item');

    // if button has class 'active' - expand item
    if (tabsItem.classList.contains('tabs__item_active')) {
      const tabsContent = tabsItem.querySelector('.tabs__box');

      if (viewportWidth > tabsBreakpoint) {
        tabsContainer.style.minHeight = tabsContent.scrollHeight + 'px';
      } else {
        tabsContent.style.maxHeight = tabsContent.scrollHeight + 'px';
      }
    }

    // mobile accordion
    tabsButton.addEventListener('click', () => {
      const tabsContainer = tabsItem.closest('.tabs');
      const tabsActiveItem = tabsContainer.querySelector('.tabs__item_active');

      if (tabsActiveItem && tabsActiveItem !== tabsItem) {
        tabsActiveItem.classList.toggle('tabs__item_active');
        tabsActiveItem.querySelector('.tabs__box').style.maxHeight = 0;
      }

      tabsItem.classList.toggle('tabs__item_active');
      const tabsContent = tabsItem.querySelector('.tabs__box');

      if (tabsItem.classList.contains('tabs__item_active')) {
        tabsContent.style.maxHeight = tabsContent.scrollHeight + 'px';
      } else {
        tabsContent.style.maxHeight = 0;
      }
    });
  });

  // change tabs on resize
  window.addEventListener('resize', function () {
    const viewportWidth = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    tabsElements.forEach((tab) => {
      const tabsNavButtons = tab.querySelectorAll('.tabs__nav .tabs__btn');
      const tabsNavButtonFirst = tab.querySelector('.tabs__nav .tabs__btn');
      const container = tab.querySelector('.tabs__container');

      const tabsItemFirst = tab.querySelector('.tabs__item');
      const tabsActiveItem = tab.querySelector('.tabs__item_active');

      if (viewportWidth > tabsBreakpoint) {
        for (let i = 0; i < tabsNavButtons.length; i++) {
          tabsNavButtons[i].classList.remove('tabs__btn_active');
        }

        if (tabsActiveItem) {
          const tabsActiveBox = tabsActiveItem.querySelector('.tabs__box');
          const tabsId = tabsActiveItem.getAttribute('id');
          const tabsActiveButton = tab.querySelector(
            'a[href="#' + tabsId + '"]'
          );

          tabsActiveButton.classList.add('tabs__btn_active');

          tabsActiveBox.style.maxHeight = null;
          container.style.minHeight = tabsActiveBox.scrollHeight + 'px';
        } else {
          tabsNavButtonFirst.classList.add('tabs__btn_active');
          tabsItemFirst.classList.add('tabs__btn_active');
        }
      } else {
        container.style.minHeight = null;

        if (tabsActiveItem) {
          tabsActiveItem.querySelector('.tabs__box').style.maxHeight =
            tabsActiveItem.querySelector('.tabs__content').scrollHeight + 'px';
        }
      }
    });
  });
})(document);
