const gameContainer = document.querySelector(".game-card");

const queryString = document.location.search;
let param = new URLSearchParams(queryString);
let id = parseInt(param.get("id"));

const newUrl = `https://gamehub.kenthore.no/wp-json/wc/store/products/` + id;

console.log(id)

//import games from "./gamesexport.js";

const addToCart = document.querySelector(".cta-a");

function purchase() {
    localStorage.setItem("games", JSON.stringify(games[0]));
};

async function fetchGame() {
    try {
      const response = await fetch(newUrl);
      const results = await response.json();
      
      console.log(results);
      //createHTML(results);
      
      gameContainer.innerHTML = "";

      gameContainer.innerHTML += `<div class="game-card" id="${results.id}">
                                <a class="clickable" href="play.html">
                                <img class="game gameImg" src="${results.images[0].src}" alt="${results.name}"/>
                                <h2 class="gameName">${results.name}</h2>
                                <p class="gameDescription">${results.description}</p>
                                <a href="checkout.html?id=${results.id}"> Add to cart </a>
                                </a>
                                </div>`;
      
    }
    catch(error) {
      console.log(error);
    }

    
  };


fetchGame();


//function createHTML(gameContainer) {
      
//      };
  
//  let html = "";
  
//  gameContainer.innerHTML = html;


//let html = "";

//html.innerHTML += `<div class="game-card" id="${results.id}">
 //       <a class="clickable" href="play.html">
 //       <img class="game gameImg" src="${results.images}" alt="${results.name}"/>
 //       <h2 class="gameName">${results.name}</h2>
 //       <p class="gameDescription">${results.description}</p>
 //       <a href="play.html"> Read more </a>
 //       </a>
 //       </div>`;



addToCart.addEventListener("submit", purchase());