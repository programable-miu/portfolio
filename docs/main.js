$(function () {
  const controller = new ScrollMagic.Controller()

  new ScrollMagic.Scene({
    triggerElement: '#wrapper',
    duration: 2000,
  })
  .setTween(TweenMax.to('#small-gear', 1, { rotation: 600, ease: Linear.easeNone }))
  .setPin('#small-gear')
  .addTo(controller)

  new ScrollMagic.Scene({
    triggerElement: '#wrapper',
    duration: 2000,
  })
  .setTween(TweenMax.to('#large-gear', 1, { rotation: -400, ease: Linear.easeNone }))
  .setPin('#large-gear')
  .addTo(controller)

  new ScrollMagic.Scene({
    triggerElement: '#wrapper',
  })
  .setPin('.headline')
  .addTo(controller)

  new ScrollMagic.Scene({
    triggerElement: '#wrapper',
  })
  .setPin('.content')
  .addTo(controller)
})
