/* ==========================================================================
   ZakirVisuals Portfolio
   File: portfolio.js
   Purpose: Load JSON Data
   Portfolio • Services • Testimonials • FAQs
   ========================================================================== */

async function initPortfolio() {

    /* ==========================
       JSON Files
       ========================== */

    const files = {
        portfolio: "assets/json/portfolio.json",
        services: "assets/json/services.json",
        testimonials: "assets/json/testimonials.json",
        faq: "assets/json/faq.json"
    };

    /* ==========================
       Load Portfolio
       ========================== */

    await loadSection(
        files.portfolio,
        "#portfolio-grid",
        createPortfolioCard
    );

    /* ==========================
       Load Services
       ========================== */

    await loadSection(
        files.services,
        "#services-grid",
        createServiceCard
    );

    /* ==========================
       Load Testimonials
       ========================== */

    await loadSection(
        files.testimonials,
        "#testimonial-grid",
        createTestimonialCard
    );

    /* ==========================
       Load FAQs
       ========================== */

    await loadSection(
        files.faq,
        "#faq-list",
        createFaqItem
    );

}


/* ==========================================================================
   Generic JSON Loader
   ========================================================================== */

async function loadSection(url, containerSelector, renderItem) {

    const container = document.querySelector(containerSelector);

    if (!container) return;

    try {

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error("JSON not found");

        }

        const data = await response.json();

        container.innerHTML = "";

        data.forEach(item => {

            container.insertAdjacentHTML(

                "beforeend",

                renderItem(item)

            );

        });

    }

    catch (error) {

        console.error(error);

    }

}


/* ==========================================================================
   Portfolio Card
   ========================================================================== */

function createPortfolioCard(item) {

    return `

        <article class="portfolio-card">

            <img src="${item.image}" alt="${item.title}">

            <div class="card-content">

                <span>${item.category}</span>

                <h3>${item.title}</h3>

                <p>${item.description}</p>

            </div>

        </article>

    `;

}


/* ==========================================================================
   Service Card
   ========================================================================== */

function createServiceCard(item) {

    return `

        <article class="service-card">

            <h3>${item.title}</h3>

            <p>${item.description}</p>

        </article>

    `;

}


/* ==========================================================================
   Testimonial Card
   ========================================================================== */

function createTestimonialCard(item) {

    return `

        <article class="testimonial-card">

            <p>"${item.message}"</p>

            <h4>${item.name}</h4>

            <span>${item.role}</span>

        </article>

    `;

}


/* ==========================================================================
   FAQ Item
   ========================================================================== */

function createFaqItem(item) {

    return `

        <details class="faq-item">

            <summary>${item.question}</summary>

            <p>${item.answer}</p>

        </details>

    `;

}