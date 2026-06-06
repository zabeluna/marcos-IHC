
(function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
    });

    gsap.from(".catalog-card", {
        scrollTrigger: {
            trigger: "#collection",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });
})();
