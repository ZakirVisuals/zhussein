/* ==========================================================================
   ZakirVisuals Portfolio
   File: navbar.js
   Purpose: Navbar • Mobile Menu • Sticky Header • Active Link
   ========================================================================== */

function initNavbar() {

    /* ==========================
       Elements
       ========================== */

    const header = document.querySelector("header");
    const nav = document.querySelector(".main-nav");
    const toggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".main-nav a");

    /* ==========================
       Mobile Menu
       ========================== */

    if (toggle && nav) {

        toggle.addEventListener("click", () => {

            nav.classList.toggle("open");
            toggle.classList.toggle("active");

            const expanded = toggle.getAttribute("aria-expanded") === "true";

            toggle.setAttribute("aria-expanded", !expanded);

        });

    }

    /* ==========================
       Close Menu After Click
       ========================== */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (nav) nav.classList.remove("open");

            if (toggle) {

                toggle.classList.remove("active");
                toggle.setAttribute("aria-expanded", "false");

            }

        });

    });

    /* ==========================
       Sticky Header
       ========================== */

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 20) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /* ==========================
       Active Navigation
       ========================== */

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        if (href === currentPage) {

            link.classList.add("active");

            link.setAttribute("aria-current", "page");

        }

    });

}