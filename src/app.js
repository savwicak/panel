gsap.registerPlugin(Draggable);

Draggable.create("#panel", {
    type: "x,y",
    bounds: document.body,
})

gsap.set("#panel", {
    y:"-300%"
})

gsap.set("#text > *", {
    opacity :0,
    y: "-10px",
})

gsap.to("#panel", {
    y: "0",
    duration: 1,
    ease: "bounce"
})

gsap.to("#text > *", {
    delay:0.7,
    y:0,
    opacity:1,
    duration: 0.5,
    stagger: 0.3
})