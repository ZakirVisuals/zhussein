/* ==========================================================================
   ZakirVisuals Portfolio
   File: theme.js
   Purpose: Dark / Light Theme
   ========================================================================== */

function initTheme() {

    /* ==========================
       Elements
       ========================== */

    const themeButton = document.querySelector(".theme-toggle");

    if (!themeButton) return;

    /* ==========================
       Storage Key
       ========================== */

    const STORAGE_KEY = "zakirvisuals-theme";

    /* ==========================
       System Theme
       ========================== */

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    /* ==========================
       Saved Theme
       ========================== */

    const savedTheme = localStorage.getItem(STORAGE_KEY);

    const currentTheme = savedTheme || systemTheme;

    setTheme(currentTheme);

    /* ==========================
       Toggle Theme
       ========================== */

    themeButton.addEventListener("click", () => {

        const newTheme =
            document.documentElement.dataset.theme === "light"
                ? "dark"
                : "light";

        setTheme(newTheme);

    });

    /* ==========================
       Apply Theme
       ========================== */

    function setTheme(theme) {

        if (theme === "light") {

            document.documentElement.setAttribute(
                "data-theme",
                "light"
            );

        } else {

            document.documentElement.removeAttribute(
                "data-theme"
            );

        }

        localStorage.setItem(STORAGE_KEY, theme);

        updateButton(theme);

    }

    /* ==========================
       Update Button
       ========================== */

    function updateButton(theme) {

        themeButton.setAttribute(
            "aria-label",
            theme === "light"
                ? "Switch to Dark Theme"
                : "Switch to Light Theme"
        );

        themeButton.setAttribute(
            "title",
            theme === "light"
                ? "Dark Mode"
                : "Light Mode"
        );

    }

}