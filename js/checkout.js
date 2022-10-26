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
const checkoutGameCard = document.querySelector(".checkout-game-card");

const fetchedGame = localStorage.getItem("game");
const parsedGame = JSON.parse(fetchedGame);

if(!parsedGame) {
    checkoutGameCard.innerHTML = "No games in cart"
} else {
    checkoutGameCard.innerHTML += `<div class="checkout-game" id="${parsedGame.id}">
                                    <input id="cta-cancel" type="submit" value="X"/>
                                    <img class="game gameImg" src="${parsedGame.img}" alt="${parsedGame.gameName}"/>
                                    <h2 class="gameName">${parsedGame.gameName}</h2>
                                    <p class="gameDescription">${parsedGame.description}</p>
                                    </div>`;
};

const cancel = document.querySelector("#cta-cancel");

function cancelCta() {
    localStorage.removeItem("games");
    checkoutGameCard.innerHTML = "";
};

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
    
};

function submit(event) {

    event.preventDefault();

    if(checkInputs(firstName.value, 3) && checkInputs(lastName.value, 3) && checkInputs(cardNumber.value, 10) && checkInputs(cvc.value, 3) && checkInputs(expiry.value, 4)) {
        window.location.href="../success.html"
    } else {
        prompt.innerHTML = `<div class="errorMsg">Please insert valid info</div>`;
    };
};

contactForm.addEventListener("submit", validateForm);
contactForm.addEventListener("submit", submit);
cancel.addEventListener("submit", cancelCta);