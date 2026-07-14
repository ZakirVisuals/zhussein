/* ==========================================================================
   ZakirVisuals Portfolio
   File: utils.js
   Purpose: Reusable Helper Functions
   ========================================================================== */


/* ==========================================================================
   Query Selector
   ========================================================================== */

const $ = (selector, scope = document) => scope.querySelector(selector);

const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];


/* ==========================================================================
   Add Event Listener
   ========================================================================== */

function on(element, event, callback) {

    if (!element) return;

    element.addEventListener(event, callback);

}


/* ==========================================================================
   Toggle Class
   ========================================================================== */

function toggleClass(element, className) {

    if (!element) return;

    element.classList.toggle(className);

}


/* ==========================================================================
   Add Class
   ========================================================================== */

function addClass(element, className) {

    if (!element) return;

    element.classList.add(className);

}


/* ==========================================================================
   Remove Class
   ========================================================================== */

function removeClass(element, className) {

    if (!element) return;

    element.classList.remove(className);

}


/* ==========================================================================
   Local Storage
   ========================================================================== */

function saveStorage(key, value) {

    localStorage.setItem(

        key,

        JSON.stringify(value)

    );

}

function getStorage(key) {

    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : null;

}


/* ==========================================================================
   Debounce
   Prevents repeated function calls
   ========================================================================== */

function debounce(callback, delay = 300) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}


/* ==========================================================================
   Throttle
   Limits function execution
   ========================================================================== */

function throttle(callback, delay = 200) {

    let waiting = false;

    return (...args) => {

        if (waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, delay);

    };

}


/* ==========================================================================
   Copy Text
   ========================================================================== */

async function copyText(text) {

    try {

        await navigator.clipboard.writeText(text);

        return true;

    }

    catch {

        return false;

    }

}


/* ==========================================================================
   Format Date
   ========================================================================== */

function formatDate(date) {

    return new Date(date).toLocaleDateString("en-US", {

        year: "numeric",

        month: "long",

        day: "numeric"

    });

}


/* ==========================================================================
   Random ID
   ========================================================================== */

function randomId(length = 8) {

    return Math.random()

        .toString(36)

        .substring(2, length + 2);

}


/* ==========================================================================
   Console Message
   ========================================================================== */

console.log("✅ utils.js Loaded");