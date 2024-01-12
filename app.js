// from: in from method you dont have to specify the inital state, (it will figure out by iself)



//fromTo; in fromto method you have to specify the default value, and also the new animation state.


gsap.from(".box1", {
    y: -200,
    duration: 2,
    ease: "linear",
    yoyo: true,  
    repeat: -1,
})

gsap.fromTo(".box2", {
    y:1000, opacity: 0,
},{
    opacity: 1,
    y: -1000,
    duration: 0.5,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true,
})

gsap.fromTo(".box3", {
    y: 300,
    opacity: 0,
},{
    opacity: 1,
    y: -1000,
    x: 400,
    borderRadius: 40,
    yoyo: true,
    repeat: -1,
    duration: 1,
})