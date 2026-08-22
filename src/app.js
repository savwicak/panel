gsap.registerPlugin(Draggable);

const panels = gsap.utils.toArray(".panel");

gsap.set(panels, {
    position: "absolute",
    top: "50%",
    left: "50%",
    xPercent: -50,
    yPercent: -50,
    y: "-300%",
    opacity: 0
});

panels.forEach((panel, index) => {
    gsap.to(panel, {
        x: index * 35,
        y: index * 35,
        opacity: 1,
        duration: 1,
        delay: index * 0.15,
        ease: "bounce.out"
    });
});

Draggable.create(".panel", {
    type: "x,y",
    bounds: document.body
});