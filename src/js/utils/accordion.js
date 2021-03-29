// Accordion and Expand/collapse
(function () {
  const accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach((accordionItem) => {
    const accordionButton = accordionItem.querySelector('.accordion__btn');

    // if button has class 'active' - expand item
    if (accordionItem.classList.contains('_active')) {
      const accordionContent = accordionItem.querySelector('.accordion__box');
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    }

    accordionButton.addEventListener('click', () => {
      // Show only one of item at a time - just wrap all items with .accordion_show-one in HTML (accordion)
      const accordionContainer = accordionItem.closest('.accordion_show-one');

      if (accordionContainer) {
        const accordionActiveItem = accordionContainer.querySelector('.accordion__item._active');
        if (accordionActiveItem && accordionActiveItem !== accordionItem) {
          accordionActiveItem.classList.toggle('_active');
          accordionActiveItem.querySelector('.accordion__box').style.maxHeight = 0;
        }
      }

      accordionItem.classList.toggle('_active');
      const accordionContent = accordionItem.querySelector('.accordion__box');

      if (accordionItem.classList.contains('_active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = 0;
      }
    });
  });
})(document);

// change accordion content max-height on resize
window.addEventListener('resize', function () {
  const activeItems = document.querySelectorAll('.accordion__item._active');

  activeItems.forEach((activeItem) => {
    const activeBox = activeItem.querySelector('.accordion__box');
    const activeContent = activeBox.querySelector('.accordion__content');

    activeBox.style.maxHeight = activeContent.scrollHeight + 'px';
  });
});
