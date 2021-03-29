// Scroll down (hero)
(function () {
  const scrollButton = document.querySelector('.hero__scroll-btn');

  if (scrollButton) {
    scrollButton.addEventListener('click', scrollDown);
  }

  function scrollDown(e) {
    e.preventDefault();

    let hero = scrollButton.closest('.hero');
    let scrollHeight = hero.offsetHeight;

    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth"
    });
  }
})(document);