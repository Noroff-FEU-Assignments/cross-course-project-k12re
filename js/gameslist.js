const gamesList = document.querySelector(".game-cards");

import games from "../js/gamesexport.js";

let html = "";

for (let i = 0; i < games.length; i++) {
    html += `<div class="game-card" id="${games[i].id}">
              <a class="clickable" href="play.html">
              <img class="game gameImg" src="${games[i].img}" alt="${games[i].gameName}"/>
              <h2 class="gameName">${games[i].gameName}</h2>
              <p class="gameDescription">${games[i].description}</p>
              <a href="play.html"> Read more </a>
              </a>
            </div>`

};

gamesList.innerHTML = html;

