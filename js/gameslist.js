const url = "https://gamehub.kenthore.no/wp-json/wc/store/products";
const gamesList = document.querySelector(".game-cards");

//import games from "../js/gamesexport.js";

async function fetchGames() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    createHTML(results);
    console.log(results);
  }
  catch(error) {
    console.log(error);
  }
};

fetchGames();

function createHTML(games) {
  games.forEach(results => {
    gamesList.innerHTML += `<div class="game-card" id="${results.id}">
    <a class="clickable" href="play.html">
    <img class="game gameImg" src="${results.images[0].src}" alt="${results.name}"/>
    <h2 class="gameName">${results.name}</h2>
    <p class="gameDescription">${results.description}</p>
    <a href="play.html"> Read more </a>
    </a>
  </div>`
  }
  );
}

//for (let i = 0; i < results.length; i++) {
//  html += `<div class="game-card" id="${results.id}">
//            <a class="clickable" href="play.html">
//            <img class="game gameImg" src="${results.images}" alt="${results.name}"/>
//            <h2 class="gameName">${results.name}</h2>
//            <p class="gameDescription">${results.description}</p>
//            <a href="play.html"> Read more </a>
//            </a>
//          </div>`

//};

let html = "";

gamesList.innerHTML = html;


