import shuffleDeck from './modules/shuffle-deck';
import { dealCards, dealOneCard } from './modules/deal-cards';

let samsSecondMove = '';
let dealersSecondMove = '';

const logInitialMove = (initialCards) => {
  console.log(`Sam: ${initialCards.sam.join(', ')}`);
  console.log(`Dealer: ${initialCards.dealer.join(', ')}`);
};

const logTotal = (total) => {
  console.log(' ');
  console.log(`Sam's total: ${total[0]}`);
  console.log(`Dealer's total: ${total[1]} \n`);
};

const score = {
  J: 10,
  K: 10,
  Q: 10,
  A: 11,
};

const totaliser = (cards) => {
  const mapped = cards.map(a => a.split(' ')[0]);
  return mapped.reduce((a, b) => (score[a] || Number(a)) + (score[b] || Number(b)), 0);
};

const evaluateCards = (initialCards, gameDeck) => {
  const sam = totaliser(initialCards.sam);
  const dealer = totaliser(initialCards.dealer);

  logTotal([sam, dealer]);

  if (sam > 21) {
    console.log("Sam's total is greater than 21, Dealer wins!");
    return;
  } else if (dealer > 21) {
    console.log("Dealers's total is greater than 21, Sam wins!");
    return;
  }

  if (sam === 21 || dealer === 21) {
    let winner = "It's a draw";
    if (sam === 21 && dealer !== 21) {
      winner = 'Sam wins!';
    } else if (dealer === 21 && sam !== 21) {
      winner = 'Dealer wins!';
    }
    console.log(winner);
    return;
  }

  if (sam >= 17) {
    if (dealer > sam) {
      console.log('Dealer wins!');
      return;
    }
    dealersSecondMove(initialCards, gameDeck);
  } else {
    samsSecondMove(initialCards, gameDeck);
  }
};

samsSecondMove = (initialCards, gameDeck) => {
  initialCards.sam.push(dealOneCard(gameDeck));
  logInitialMove(initialCards);
  evaluateCards(initialCards, gameDeck);
};

dealersSecondMove = (initialCards, gameDeck) => {
  initialCards.dealer.push(dealOneCard(gameDeck));
  logInitialMove(initialCards);
  evaluateCards(initialCards, gameDeck);
};

const startGame = () => {
  console.log('Game started \n');

  const gameDeck = shuffleDeck();
  const initialCards = dealCards(gameDeck);
  logInitialMove(initialCards);
  evaluateCards(initialCards, gameDeck);
};

startGame();
