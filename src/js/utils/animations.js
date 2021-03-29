import gsap from 'gsap';
import 'lazysizes';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

ScrollMagicPluginGsap(ScrollMagic, gsap);

// Animations
const controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0.95,
  },
});

// animated element
const element = document.querySelectorAll('[data-animation]');
const duration = 0.35;

// create animations for every element
for (var i = 0; i < element.length; i++) {
  // type
  var type = element[i].getAttribute('data-animation');

  // delay
  var delayData = element[i].getAttribute('data-animation-delay');
  var delay = delayData / 1000;

  if (!delayData) {
    delay = 0.1;
  }

  // fade
  if (type == 'fade') {
    new ScrollMagic.Scene({
      triggerElement: element[i],
      reverse: false,
    })
      .setTween(
        gsap.to(element[i], duration, {
          opacity: 1,
          delay: delay,
          ease: 'sine.inOut',
        })
      )
      .addTo(controller);
  }
  // fade up
  else if (type == 'fade-up') {
    new ScrollMagic.Scene({
      triggerElement: element[i],
      reverse: false,
    })
      .setTween(
        gsap.to(element[i], duration, {
          opacity: 1,
          y: 0,
          delay: delay,
          ease: 'sine.inOut',
        })
      )
      .addTo(controller);
  }
  // fade left
  else if (type == 'fade-left') {
    new ScrollMagic.Scene({
      triggerElement: element[i],
      reverse: false,
    })
      .setTween(
        gsap.to(element[i], duration, {
          opacity: 1,
          x: 0,
          delay: delay,
          ease: 'sine.inOut',
        })
      )
      .addTo(controller);
  }
  // fade right
  else if (type == 'fade-right') {
    new ScrollMagic.Scene({
      triggerElement: element[i],
      reverse: false,
    })
      .setTween(
        gsap.to(element[i], duration, {
          opacity: 1,
          x: 0,
          delay: delay,
          ease: 'sine.inOut',
        })
      )
      .addTo(controller);
  }
}
