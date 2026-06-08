
(function () {
    gsap.registerPlugin(ScrollTrigger);

    // ── Hero text entrance ───────────────────────────────────────────────────
    gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
    });

    // ── Catalog cards reveal ─────────────────────────────────────────────────
    gsap.from(".catalog-card-3d", {
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

    // ══════════════════════════════════════════════════════════════════════════
    // PERFORMANCE SECTION — Animated Counters + Progress Bars
    // ══════════════════════════════════════════════════════════════════════════

    // ── Reveal elements with stagger ─────────────────────────────────────────
    gsap.utils.toArray(".perf-reveal").forEach(function (el, i) {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: i * 0.08,
            ease: "power3.out"
        });
    });

    // ── Animated number counters ─────────────────────────────────────────────
    gsap.utils.toArray(".perf-counter-value").forEach(function (el) {
        var target = parseFloat(el.getAttribute("data-count-to")) || 0;
        var suffix = el.getAttribute("data-suffix") || "";
        var decimals = parseInt(el.getAttribute("data-decimals"), 10) || 0;
        var obj = { val: 0 };

        gsap.to(obj, {
            val: target,
            duration: 2.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            onUpdate: function () {
                el.textContent = obj.val.toFixed(decimals) + suffix;
            }
        });
    });

    // ── Performance bars — scrub animation (tied to scroll) ──────────────────
    gsap.utils.toArray(".perf-bar-fill").forEach(function (bar) {
        var targetWidth = bar.getAttribute("data-perf-width") || "0";

        gsap.to(bar, {
            width: targetWidth + "%",
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
                trigger: bar.closest(".perf-bar-group"),
                start: "top 85%",
                toggleActions: "play none none none",
            },
            onComplete: function () {
                bar.classList.add("filled");
            }
        });
    });

    // ── Ambient glow parallax ────────────────────────────────────────────────
    var glowEl = document.querySelector(".perf-ambient-glow");
    if (glowEl) {
        gsap.to(glowEl, {
            y: -80,
            scale: 1.2,
            scrollTrigger: {
                trigger: "#performance",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            },
        });
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ENGINEERING SECTION — Reveal animation
    // ══════════════════════════════════════════════════════════════════════════

    var engSection = document.querySelector("#engineering");
    if (engSection) {
        // Animate text content from left
        gsap.from("#engineering .lg\\:w-1\\/2:first-child > *", {
            scrollTrigger: {
                trigger: "#engineering",
                start: "top 75%",
                toggleActions: "play none none none",
            },
            x: -40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out"
        });

        // Animate image from right
        gsap.from("#engineering .lg\\:w-1\\/2:last-child", {
            scrollTrigger: {
                trigger: "#engineering",
                start: "top 75%",
                toggleActions: "play none none none",
            },
            x: 40,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out"
        });
    }

})();
