let cards = [];
let sum;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");


let playerEl = document.querySelector('#player-el');
let player = {
  Name: "Bashir",
  chip: "145"
}

playerEl.textContent = player.Name + ": " + "$" + player.chip

function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random === 1) {
    return 11;
  } else if (random > 10 && random < 14) {
    return 10;
  } else {
    return random;
  }
}
// console.log(getRandomCard())

function startGame() {
  isAlive = true;

  firstCard = getRandomCard();
  secondCard = getRandomCard();

  cards.push(firstCard, secondCard);
  console.log(cards);
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Card: ";

  for (let i = 0; i < cards.length; i++) {
    // cardEl.textContent += cards[i] + " ";
    cardEl.textContent = cardEl.textContent + cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    message = "Do you want to draw a new card?" + String.fromCodePoint(0x1f642);
  } else if (sum === 21) {
    message = "You've got Blackjack" + String.fromCodePoint(0x1f973);
    hasBlackJack = true;
  } else {
    message = "You're out of the game" + String.fromCodePoint(0x1f635);
    isAlive = false;
  }

  
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    // sum = card
    cards.push(card);
    sum = sum + card;

    console.log(cards);
    renderGame();
  }
}
