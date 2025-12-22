let cards;
let shuffledCards;

function shuffle() {
    document.querySelector(`.playground-rule`).remove();
    let cardInputs = document.querySelectorAll(`.card-input`);const playground = document.querySelector('.playground-cards');
    const oldCards = [...playground.children];

    oldCards.forEach(card => card.classList.remove('show'));

    updateCardsCount(cardInputs);

    cards = generateCardImagesFromInputs();

    shuffledCards = shuffleCards(cards);
}

function updateCardsCount(cardInputs) {
    let count = 0;

    cardInputs.values().forEach((card) => {
        count += Number(card.value);
    })

    document.querySelector(`.count`).innerHTML = count;
}

function reset() {
    document.querySelectorAll('.card-input').forEach(card => {
        card.value = 1;
    });

    const playground = document.querySelector('.playground-cards');
    const cards = [...playground.children];

    cards.forEach(card => card.classList.remove('show'));

    setTimeout(() => {
        playground.innerHTML = '';
        shuffle();
    }, 300);
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

        for (let i = 0; i < count; i++) {
            const rotation = Math.floor(Math.random() * 31) - 15; // -15 do +15

            cards.push({
                src: `${basePath}${suitUpper}-${value}.svg`,
                alt: `${suitUpper} ${value}`,
                className: 'full-card',
                rotate: rotation
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
    const playground = document.querySelector('.playground-cards');
    const lastCard = playground.lastElementChild;
    if (!lastCard) return;

    lastCard.classList.remove('show');

    setTimeout(() => {
        playground.removeChild(lastCard);
    }, 300);
}