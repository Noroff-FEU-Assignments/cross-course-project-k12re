const contactForm = document.querySelector(".contact-form");
const email = document.querySelector(".email");
const textArea = document.querySelector(".textarea");
const textAreaReq = document.querySelector("#textarea-req");
const emailReq = document.querySelector("#email-req");
const prompt = document.querySelector(".prompt");


function validateForm() {

    event.preventDefault();

    if(textArea.value.length < 25) {
        textAreaReq.style.display = "block"
    } else {
        textAreaReq.style.display = "none"
    };

    if (checkMail(email.value) === true) {
        emailReq.style.display = "none";
    } else {
        emailReq.style.display = "block";
    };

    console.log(textArea.value.length);
    console.log(email.value);
};


function checkMail(email) {

    const regEx = /\S+@\S+\.\S+/;
    const mailPattern = regEx.test(email);
    return mailPattern;
};


function submit(event) {

    event.preventDefault();

    if(checkInputs(textArea.value, 25) && checkInputs(email.value, true)) {
        prompt.innerHTML = `<div class="successMsg">Submission success</div>`;
        contactForm.reset();
    } else {
        prompt.innerHTML = `<div class="errorMsg">Please insert valid info</div>`;
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
