// Navigation
(function () {
  // Define our viewportWidth
  let viewportWidth;

  let setViewportWidth = function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  };

  setViewportWidth();

  // Recalculate viewportWidth on resize
  window.addEventListener('resize', function () {setViewportWidth();}, false);

  // Mobile navigation
  const navBreakpoint = 1199;
  const navTransition = 400;
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  const navToggler = document.querySelector('.nav__toggler');
  const subnavItems = document.querySelectorAll('.nav__item._subnav');

  navToggler.addEventListener('click', navToggle, false);

  function navToggle(e) {
    e.preventDefault();

    if (body.classList.contains('nav-opened')) {
      body.classList.remove('nav-opened');
      body.classList.add('nav-closing');

      setTimeout(function () {
        body.classList.remove('nav-closing');
      }, navTransition);

      setTimeout(function () {
        nav.classList.remove('_subnav-level-2');

        subnavItems.forEach((subnavItem) => {
          subnavItem.classList.remove('_active');
        });
      }, navTransition);
    } else {
      body.classList.add('nav-opened');
    }
  }

  // Detect touch devices
  var supportsTouch = false;

  if ('ontouchstart' in document.documentElement) {
    body.classList.add('touch-yes');
    supportsTouch = true;
  } else {
    body.classList.add('touch-no');
  }

  // Sub-navigation
  const subnavLinks = document.querySelectorAll('.nav__item._subnav > .nav__link');

  subnavLinks.forEach((subnavLink) => {
    const subnavContainer = subnavLink.closest('.nav__item');
    const subnavDropdown = subnavLink.nextElementSibling;
    const subnavBack = subnavContainer.querySelector('.nav__link_back');

    // back button click
    subnavBack.addEventListener('click', function (e) {
      e.preventDefault();

      nav.classList.remove('_subnav-level-2');
      subnavContainer.classList.remove('_active');
    });

    // subnav link click
    subnavLink.addEventListener('click', function (e) {
        setViewportWidth();

        if (supportsTouch || viewportWidth <= navBreakpoint) {
          e.preventDefault();
        }

        if (subnavContainer.classList.contains('_active')) {
          subnavContainer.classList.remove('_active');

          if (viewportWidth > navBreakpoint) {
            header.classList.remove('_subnav-is-active');
          }
        } else {
          subnavContainer.classList.add('_active');

          if (viewportWidth > navBreakpoint) {
            header.classList.add('_subnav-is-active');
          } else {
            nav.classList.add('_subnav-level-2');
          }
        }
      }, false
    );

    // subnav link hover
    subnavLink.addEventListener('mouseover', subnavOver, false);
    subnavLink.addEventListener('mouseout', subnavOut, false);

    subnavDropdown.addEventListener('mouseover', subnavOver, false);
    subnavDropdown.addEventListener('mouseout', subnavOut, false);

    function subnavOver() {
      setViewportWidth();
      if (supportsTouch == false && viewportWidth > navBreakpoint) {
        header.classList.add('_subnav-is-active');
      }
    }

    function subnavOut() {
      setViewportWidth();
      if (supportsTouch == false && viewportWidth > navBreakpoint) {
        header.classList.remove('_subnav-is-active');
      }
    }

    // close sub-navigation by click out of it (only desktop with touch)
    if (supportsTouch) {
      document.addEventListener('click', outOfSubnav, false);
    }

    function outOfSubnav(e) {
      setViewportWidth();

      if (viewportWidth > navBreakpoint) {
        const target = e.target;

        const its_link = target == subnavLink;
        const its_nav =
          target == subnavDropdown || subnavDropdown.contains(target);
        const subnav_is_active = subnavContainer.classList.contains('_active');

        if (
          subnav_is_active &&
          !its_nav &&
          !its_link &&
          window.screen.width > navBreakpoint
        ) {
          subnavContainer.classList.remove('_active');
          header.classList.remove('_subnav-is-active');
          nav.classList.remove('_subnav-level-2');
        }
      }
    }
  });

  // Search
  const searchHeader = document.querySelector('.search_header');
  const searchBtn = searchHeader.querySelector('.search__btn');

  searchBtn.addEventListener('click', function () {
    if ( !header.classList.contains('header_search-opened') ) {
      header.classList.add('header_search-opened');
    }
  });

  // close popup when click out of block
  document.addEventListener('click', outOfSearch, false);

  function outOfSearch(e) {
    const target = e.target;

    const its_content = target == searchHeader || searchHeader.contains(target);
    const search_is_opened = header.classList.contains('header_search-opened');

    if (search_is_opened && !its_content) {
      header.classList.remove('header_search-opened');
    }
  }

  // reset navigation classes on window resize
  window.addEventListener('resize', function () {
    setViewportWidth();
    subnavItems.forEach((subnavItem) => {
      subnavItem.classList.remove('_active');
    });
    header.classList.remove('_subnav-is-active');
    if (viewportWidth > navBreakpoint) {
      body.classList.remove('nav-opened');
      body.classList.remove('nav-visible');
      nav.classList.remove('_subnav-level-2');
    } else {
      nav.classList.remove('_subnav-level-2');
    }
  });
})(document);