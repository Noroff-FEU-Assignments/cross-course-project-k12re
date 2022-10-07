const gamesList = document.querySelector(".games-list");

const games = [
    {
        id: "0",
        img: "images/header-game.png",
        gameName: "space War",
        description: "Embark on an epic adventure in this time consuming adventure."
    },
    {
        id: "1",
        img: "images/featured-game_1.png",
        gameName: "Forge Legend",
        description: "The legend is forged, by a legend in a forge by a smith."
    },
    {
        id: "2",
        img: "images/featured-game_2.png",
        gameName: "Furious",
        description: "Crazy rabid monkeys going bananas. It's bonkers."
    },
    {
        id: "3",
        img: "images/featured-game_3.png",
        gameName: "Assasin",
        description: "They can't see him.. or her They have no clue. BOOM, they're dead."
    }
];

let html = "";

for (let i = 0; i < gamesList.length; i++) {
    html += `<div class="game-card" id=${games[i].id}>
              <a class="clickable" href="play.html">
              <img class="gameImg" />
              <h2 class="gameName"></h2>
              <p class="gameDescription"></p>
              <a href="play.html"> Read more </a>
              </a>
            </div>`

}

console.log(html)
