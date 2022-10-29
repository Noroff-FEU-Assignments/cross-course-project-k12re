const headerGame = document.querySelector(".header-game_big");
const newGames = document.querySelector(".new-games");
const usedGames = document.querySelector(".used-games");
const url = "https://gamehub.kenthore.no/wp-json/wc/store/products/";

async function callAPI() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    newGames.innerHTML = "";
    usedGames.innerHTML = "";
    headerGame.innerHTML = `<div class="header-game_big" id="${results[9]}">
                            <img class="cover-big_img" src="${results[9].images[0].src}" alt="${results.name}"/>
                            <h2 class="gameName">${results[9].name}</h2>
                            <p class="gameDescription">${results[9].description}</p>
                            <a href="play.html?id=${results[9].id}"> Read more </a>
                           </div>`;

    for (let i = 0; i < 3; i++) {
      newGames.innerHTML += `<div class="featured-game" id="${results[i].id}">
                              <img class="game gameImg cover-small_img" src="${results[i].images[0].src}" alt="${results[i].name}"/>
                            </div>`;
    }

    for (let i = 3; i < 6; i++) {
      usedGames.innerHTML += `<div class="featured-game" id="${results[i].id}">
                                <img class="game gameImg cover-small_img" src="${results[i].images[0].src}" alt="${results[i].name}"/>
                              </div>`;
    }
  }
  catch(error) {
    console.log(error);
  }

};

 callAPI();