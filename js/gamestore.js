import games from "./gamesexport.js";

const addToCart = document.querySelector(".cta-a");

function purchase() {
    localStorage.setItem("games", JSON.stringify(games[0]));
};

addToCart.addEventListener("submit", purchase());

