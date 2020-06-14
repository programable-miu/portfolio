$(function () {
  const controller = new ScrollMagic.Controller()

  new ScrollMagic.Scene({
    triggerElement: '#wrapper',
    duration: 6000,
  })
  .setTween(TweenMax.to('#small-gear', 1, { rotation: 600, ease: Linear.easeNone }))
  .setPin('#small-gear')
  .addTo(controller)

  new ScrollMagic.Scene({
    triggerElement: '#wrapper',
    duration: 6000,
  })
  .setTween(TweenMax.to('#large-gear', 1, { rotation: -400, ease: Linear.easeNone }))
  .setPin('#large-gear')
  .addTo(controller)

  const setActive = (headline, content, offset, duration) => {
    new ScrollMagic.Scene({
      triggerElement: '#wrapper',
    })
    .setPin(headline)
    .addTo(controller)

    new ScrollMagic.Scene({
      triggerElement: '#wrapper',
    })
    .setPin(content)
    .addTo(controller)

    new ScrollMagic.Scene({
      triggerElement: headline,
      offset,
      duration,
    })
    .setClassToggle(headline, 'active')
    .addTo(controller)

    new ScrollMagic.Scene({
      triggerElement: content,
      offset: offset - 171, // 同時に切り替わるよう微調整
      duration,
    })
    .setClassToggle(content, 'active')
    .addTo(controller)
  }

 setActive('#myself-headline', '#myself-content', 0, 2000)
 setActive('#product-1-headline', '#product-1-content', 2000, 1000)
 setActive('#product-2-headline', '#product-2-content', 3000, 1000)
 setActive('#last-headline', '#last-content', 4000, 2000)
})
