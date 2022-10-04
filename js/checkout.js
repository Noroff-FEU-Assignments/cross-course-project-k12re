const contactForm = document.querySelector(".contact-form");
const message = document.querySelector(".prompt");
const firstName = document.querySelector(".firstname");
const firstNameReq = document.querySelector("#firstname-req");
const lastName = document.querySelector(".lastname");
const lastNameReq = document.querySelector("#lastname-req");
const cardNumber = document.querySelector(".cardnumber");
const cardNumberReq = document.querySelector("#cardnumber-req");
const cvc = document.querySelector(".cvc");
const cvcReq = document.querySelector("#cvc-req");
const expiry = document.querySelector(".expiry");
const expiryReq = document.querySelector("#expiry-req");

function validateForm() {

    event.preventDefault();

    if(firstName.value.length < 3) {
        firstNameReq.style.display = "block"
    } else {
        firstNameReq.style.display = "none"
    };

    if(lastName.value.length < 3) {
        lastNameReq.style.display = "block"
    } else {
        lastNameReq.style.display = "none"
    };

    if(cardNumber.value.length < 10) {
        cardNumberReq.style.display = "block"
    } else {
        cardNumberReq.style.display = "none"
    };

    if(cvc.value.length < 3) {
        cvcReq.style.display = "block"
    } else {
        cvcReq.style.display = "none"
    };

    if(expiry.value.length < 4) {
        expiryReq.style.display = "block"
    } else {
        expiryReq.style.display = "none"
    };



    console.log(firstName.value.length);
    console.log(lastName.value.length);
    console.log(cardNumber.value.length);
    console.log(cvc.value.length);
    console.log(expiry.value.length);
    
};

function submit(event) {

    event.preventDefault();

    if(checkInputs(firstName.value, 3) && checkInputs(lastName.value, 3) && checkInputs(cardNumber.value, 10) && checkInputs(cvc.value, 3) && checkInputs(expiry.value, 4)) {
        message.innerHTML = `<div class="successMsg">Submission success</div>`;
        contactForm.reset();
    } else {
        message.innerHTML = `<div class="errorMsg">Please insert valid info</div>`;
    };
}


function checkInputs(value, length) {

    if (value.length >= length) {
        return true;
    } else {
        return false;
    }
};

contactForm.addEventListener("submit", validateForm);
contactForm.addEventListener("submit", submit);