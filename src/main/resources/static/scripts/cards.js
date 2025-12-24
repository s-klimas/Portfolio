let cards = [];
let shuffledCards= [];
const playedCards = [];

function shuffle() {
    let cardInputs = document.querySelectorAll(`.card-input`);
    const playground = document.querySelector('.playground-cards');
    const oldCards = [...playground.children];

    oldCards.forEach(card => card.classList.remove('show'));

    updateCardsCount(cardInputs);

    cards = generateCardImagesFromInputs();

    shuffledCards = shuffleCards(cards);

    writeDownWords();
}

function writeDownWords() {
    const container = document.querySelector('.menu-words');
    if (!container) return;

    container.innerHTML = '';

    [...shuffledCards].reverse().forEach(card => {
        if (!card.word) return;

        const p = document.createElement('p');
        p.textContent = card.word;
        container.appendChild(p);
    });
}

function updateCardsCount(cardInputs) {
    let count = 0;

    cardInputs.values().forEach((card) => {
        count += Number(card.value);
    })

    document.querySelector(`.count`).innerHTML = count;
}

function generateCardImagesFromInputs() {
    const inputs = document.querySelectorAll('.card-input');
    const cards = [];

    inputs.forEach(input => {
        const count = Number(input.value);
        if (count <= 0) return;

        const [suit, value] = input.id.split('-');
        const suitUpper = suit.toUpperCase();
        const basePath = '/static/img/cards/';
        const word = input.name;

        for (let i = 0; i < count; i++) {
            const rotation = Math.floor(Math.random() * 31) - 15;

            cards.push({
                src: `${basePath}${suitUpper}-${value}.svg`,
                alt: `${suitUpper} ${value}`,
                className: 'full-card',
                rotate: rotation,
                word: word
            });
        }
    });

    return cards;
}

function shuffleCards(cards) {
    const shuffled = [...cards];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function addCardToPlayground() {
    if (shuffledCards.length === 0) return;

    const card = shuffledCards.pop();
    playedCards.push(card);

    const playground = document.querySelector('.playground-cards');

    const img = document.createElement('img');
    img.src = card.src;
    img.alt = card.alt;
    img.className = card.className;

    img.style.setProperty('--rotation', `${card.rotate}deg`);

    playground.appendChild(img);

    requestAnimationFrame(() => {
        img.classList.add('show');
    });
}

function removeLastCardFromPlayground() {
    if (playedCards.length === 0) return;

    const playground = document.querySelector('.playground-cards');
    const lastCardEl = playground.lastElementChild;
    if (!lastCardEl) return;

    const card = playedCards.pop();
    shuffledCards.push(card);

    lastCardEl.classList.remove('show');

    setTimeout(() => {
        playground.removeChild(lastCardEl);
    }, 300);
}

function toggleSuit(checkboxSelector, inputsSelector) {
    const checkbox = document.querySelector(checkboxSelector);
    const inputs = document.querySelectorAll(inputsSelector);

    checkbox.addEventListener('change', () => {
        if (!checkbox.checked) {
            inputs.forEach(input => {
                input.value = 0;
                input.disabled = true;
            });
        } else {
            inputs.forEach(input => {
                input.disabled = false;
                input.value = 1;
            });
        }
    });
}

toggleSuit('.diamonds-suit', '.card-input-diamond');

toggleSuit('.hearts-suit', '.card-input-hearts');

toggleSuit('.clubs-suit', '.card-input-clubs');

toggleSuit('.spades-suit', '.card-input-spades');

function selectNone() {
    const allInputs = document.querySelectorAll('.card-input');

    allInputs.forEach(input => {
        input.value = 0;
    });
}

function selectSmallDeck() {
    const allInputs = document.querySelectorAll('.card-input');

    allInputs.forEach(input => {
        if (input.classList.contains('small-deck')) {
            input.value = 1;
        } else {
            input.value = 0;
        }
    });
}

function selectFullDeck() {
    const allInputs = document.querySelectorAll('.card-input');

    allInputs.forEach(input => {
        input.value = 1;
    });
}

function selectDoubleDeck() {
    const allInputs = document.querySelectorAll('.card-input');

    allInputs.forEach(input => {
        input.value = 2;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const cardImages = document.querySelectorAll(".card img");

    cardImages.forEach(img => {
        img.addEventListener("click", () => {
            const cardDiv = img.closest(".card");
            if (!cardDiv) return;

            const input = cardDiv.querySelector("input[type='number']");
            if (!input) return;

            const max = input.max ? parseInt(input.max, 10) : Infinity;
            let value = parseInt(input.value, 10) || 0;

            if (value < max) {
                input.value = value + 1;
            }
        });
    });
});
