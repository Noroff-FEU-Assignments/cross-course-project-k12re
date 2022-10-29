const headerGame = document.querySelector(".header-game-big");
const newGames = document.querySelector(".new-games");
const usedGames = document.querySelector(".used-games");
const url = "https://gamehub.kenthore.no/wp-json/wc/store/products/";

  
//  newContainer.innerHTML = html1;
//  usedContainer.innerHTML = html2;

async function callAPI() {
    const response = await fetch(url);
    const results = await response.json();
    
    console.log(results);

    newGames.innerHTML = "";
    usedGames.innerHTML = "";

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
};

 callAPI();

 //

 newGames.innerHTML = html;