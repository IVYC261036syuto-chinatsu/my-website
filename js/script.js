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
const form = document.getElementById('comment-form');
const thanksMessage = document.getElementById('thanks-message');

form.addEventListener('submit', function(event) {
    // 本来の送信処理を止める
    event.preventDefault();

    // フォームを非表示
    form.style.display = 'none';

    // お礼メッセージを表示
    thanksMessage.style.display = 'block';
});