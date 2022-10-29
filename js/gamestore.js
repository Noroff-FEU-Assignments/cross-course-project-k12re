const gameContainer = document.querySelector(".game-card");

const queryString = document.location.search;
let param = new URLSearchParams(queryString);
let id = parseInt(param.get("id"));

const newUrl = `https://gamehub.kenthore.no/wp-json/wc/store/products/` + id;

const addToCart = document.querySelector(".cta-a");

async function fetchGame() {
  try {
    const response = await fetch(newUrl);
    const results = await response.json();
      
    gameContainer.innerHTML = "";

    gameContainer.innerHTML += `<div class="game-card" id="${results.id}">
                                  <a class="clickable" href="play.html">
                                    <img class="game gameImg" src="${results.images[0].src}" alt="${results.name}"/>
                                    <h2 class="gameName">${results.name}</h2>
                                    <p class="gameDescription">${results.description}</p>
                                    <a class="cta-a" href="checkout.html?id=${results.id}"> Add to cart </a>
                                  </a>
                                </div>`;
      
    }
    catch(error) {
      console.log(error);
    }

  };

fetchGame();

function purchase() {
    localStorage.setItem("game", JSON.stringify(gameContainer));
};

addToCart.addEventListener("submit", purchase());