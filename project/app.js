new Swiper ('.swiper',{

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  
  
});

gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

ScrollSmoother.create({
  wrapper:'.wrapper',
  content:'.content',
  smooth:2,
  effects:true
})



