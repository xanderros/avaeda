// Kinde section switcher
(function () {
  // Detect touch devices
  const body = document.querySelector('body');

  var supportsTouch = false;

  if ('ontouchstart' in document.documentElement) {
    body.classList.add('touch-yes');
    supportsTouch = true;
  } else {
    body.classList.add('touch-no');
  }

  var kindItems = document.querySelectorAll('.kind__inner');

  if (!supportsTouch) {
    for(var i = 0; i < kindItems.length; i++){
      let items = kindItems[i];
      items.index = i;

      items.addEventListener("mouseenter", function(){
        let count = this.index+1;
        let container = this.closest('.kind');
        container.classList.add('kind_active_' + count);
      });

      items.addEventListener("mouseleave", function(){
        let container = this.closest('.kind');
        container.classList.remove('kind_active_1');
        container.classList.remove('kind_active_2');
      });
    }
  }



})(document);