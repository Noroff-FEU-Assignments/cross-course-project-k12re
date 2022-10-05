const contactForm = document.querySelector(".contact-form");
const email = document.querySelector(".email");
const emailReq = document.querySelector("#email-req")
const password = document.querySelector(".password");
const passwordReq = document.querySelector("#password-req")


function validateForm() {
    
    event.preventDefault();

    if (checkMail(email.value) === true) {
        emailReq.style.display = "none";
    } else {
        emailReq.style.display = "block";
    };
    
    if (password.value.length < 8) {
        passwordReq.style.display = "block";
    } else {
        passwordReq.style.display = "none";
    };
};

function checkMail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const mailPattern = regEx.test(email);
    return mailPattern;
} 

function submit(event) {

    
    event.preventDefault();


    if(checkInputs(email.value, true) && checkInputs(password.value, 8)) {
        message.innerHTML = `<div class="message">Submission success<div>`;
        contactForm.reset();
    }
    else {
        message.innerHTML = `<div class="error">Please insert valid info<div>`;
    };
};

function checkInputs(value, length) {
    if (value.trim().length >= length) {
        return true;
    }
    else {
        return false;
    }
};

contactForm.addEventListener("submit", validateForm);
contactForm.addEventListener("submit", submit);