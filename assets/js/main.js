/* ==========================================================================
   ZakirVisuals Portfolio
   File: main.js
   Purpose: Initialize Website
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Initialize Theme
       ========================== */

    if (typeof initTheme === "function") {
        initTheme();
    }

    /* ==========================
       Initialize Navigation
       ========================== */

    if (typeof initNavbar === "function") {
        initNavbar();
    }

    /* ==========================
       Load Dynamic Content
       ========================== */

    if (typeof initPortfolio === "function") {
        initPortfolio();
    }

    /* ==========================
       Contact Form
       ========================== */

    if (typeof initContact === "function") {
        initContact();
    }

    /* ==========================
       Scroll Animations
       ========================== */

    if (typeof initAnimations === "function") {
        initAnimations();
    }

    console.log("✅ ZakirVisuals Website Loaded Successfully");

});