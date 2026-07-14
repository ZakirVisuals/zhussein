/* ==========================================================================
   ZakirVisuals Portfolio
   File: contact.js
   Purpose: Contact Form • EmailJS • Validation
   ========================================================================== */


function initContact() {

    /* ==========================
       Form Elements
       ========================== */

    const form = document.querySelector("#contactform");

    if (!form) return;

    const submitButton = form.querySelector('button[type="submit"]');

    const messageBox = document.getElementById("form-message");
    // const messageBox = form.querySelector(".form-message");

    /* ==========================
       EmailJS Configuration
       Replace These Values
       ========================== */

    const SERVICE_ID = "service_iz55npm";
    const TEMPLATE_ID = "template_lei2sln";
    const PUBLIC_KEY = "OSzA35jeCc_k8Y0Wi";

    emailjs.init(PUBLIC_KEY);

    /* ==========================
       Submit Form
       ========================== */

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        if (!validateForm(form)) return;

        setLoading(true);

        try {

            await emailjs.sendForm(
                  SERVICE_ID,
                  TEMPLATE_ID,
                  form
                 );


                 Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you! Your message has been sent successfully.",
        confirmButtonText: "OK"
    });

            showMessage(
                "Message sent successfully. Thank you!",
                "success"
            );

            form.reset();

        }

        catch (error) {

            console.error(error);
             Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to send message. Please try again.",
        confirmButtonText: "OK"
    });

            showMessage(
                "Something went wrong. Please try again.",
                "error"
            );

        }

        finally {

            setLoading(false);

        }

    });

    console.log("Email Sent Successfully");
alert("Test Alert");

    /* ==========================
       Loading State
       ========================== */

    function setLoading(state) {

        form.classList.toggle("form-loading", state);

        submitButton.classList.toggle("btn-loading", state);

        submitButton.disabled = state;

    }

    /* ==========================
       Show Message
       ========================== */

    function showMessage(text, type) {

        messageBox.textContent = text;

        messageBox.className = `form-message show form-${type}`;

        setTimeout(() => {

            messageBox.className = "form-message";

        }, 5000);

    }

}


/* ==========================================================================
   Form Validation
   ========================================================================== */

function validateForm(form) {

    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');

    if (!name.value.trim()) {

        alert("Please enter your name.");

        name.focus();

        return false;

    }

    if (!email.value.trim()) {

        alert("Please enter your email.");

        email.focus();

        return false;

    }

    if (!email.checkValidity()) {

        alert("Please enter a valid email address.");

        email.focus();

        return false;

    }

    if (!message.value.trim()) {

        alert("Please enter your message.");

        message.focus();

        return false;

    }

    return true;
    
}

    document.addEventListener("DOMContentLoaded", initContact);
