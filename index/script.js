
gsap.from('.main-text',{
    x:-50,
    duration:2,
    opacity:0,

})
gsap.from('a',{
    y:-50,
    duration:2
})

gsap.from('.main-img img',{
    x:50,
    duration:2,
    opacity:0
})
gsap.from('.first',{
    scale:0,
    rotate:360,
    duration:1.5,
    scrollTrigger:{
        trigger:'.first',
        scroller:'body',
      
    }
})
