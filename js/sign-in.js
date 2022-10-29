const contactForm = document.querySelector(".contact-form");
const email = document.querySelector(".email");
const emailReq = document.querySelector("#email-req");
const password = document.querySelector(".password");
const passwordReq = document.querySelector("#password-req");

function validateForm() {

    event.preventDefault();

    if(password.value.length < 8) {
        passwordReq.style.display = "block"
    } else {
        passwordReq.style.display = "none"
    };

    if (checkMail(email.value) === true) {
        emailReq.style.display = "none";
    } else {
        emailReq.style.display = "block";
    };

    console.log(password.value.length);
    console.log(email.value);
};

function submit(event) {

    event.preventDefault();

    if(checkInputs(password.value, 8) && checkInputs(email.value, true)) {
        window.location.href="../index.html";
    } else {
        prompt.innerHTML = `<div class="errorMsg">Please insert valid info</div>`;
    };
};

contactForm.addEventListener("submit", validateForm);
contactForm.addEventListener("submit", submit);