/* ==========================================================================
   ZakirVisuals Portfolio
   File: animations.js
   Purpose: Scroll Reveal • Fade Animation • Intersection Observer
   ========================================================================== */

function initAnimations() {

    /* ==========================
       Animated Elements
       ========================== */

    const elements = document.querySelectorAll(
        ".fade-in, .slide-up, .slide-left, .slide-right, .scale-in"
    );

    if (!elements.length) return;

    /* ==========================
       Observer Options
       ========================== */

    const options = {

        root: null,
        rootMargin: "0px",
        threshold: 0.15

    };

    /* ==========================
       Intersection Observer
       ========================== */

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        });

    }, options);

    /* ==========================
       Observe Elements
       ========================== */

    elements.forEach(element => {

        observer.observe(element);

    });

}


/* ==========================================================================
   Scroll To Top
   ========================================================================== */

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* ==========================================================================
   Smooth Scroll
   ========================================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});