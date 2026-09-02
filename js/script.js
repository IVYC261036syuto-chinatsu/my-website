'use strict';

const none = document.getElementById("none");
const games = document.querySelectorAll(".game-check");
console.log(games.length);
console.log(none);
console.log(games);

games.forEach(game => {

    game.addEventListener("change", () => {

        console.log(game.id + " がクリックされた");

        if (game.checked) {
            none.checked = false;
        }

    });

});

none.addEventListener("change", () => {

    if (none.checked) {

        games.forEach(game => {
            game.checked = false;
        });

    }

});

const cards = document.querySelectorAll(".game-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});