import shuffleDeck from './modules/shuffle-deck';
import dealCards from './modules/deal-cards';

const logInitialMove = (initialCards) => {
  console.log(`Sam: ${initialCards.sam.join(', ')}`);
  console.log(`Dealer: ${initialCards.dealer.join(', ')}`);
};

const logTotal = (total) => {
  console.log(' ');
  console.log(`Sam's total: ${total[0]}`);
  console.log(`Dealer's total: ${total[1]}`);
};

const score = {
  J: 10,
  K: 10,
  Q: 10,
  A: 11,
};

const totaliser = cards => cards.reduce((a, b) => {
  const scoreA = a.split(' ')[0];
  const scoreB = b.split(' ')[0];
  return (score[scoreA] || Number(scoreA)) + (score[scoreB] || Number(scoreB));
});

const evaluateCards = (cards) => {
  const sam = totaliser(cards.sam);
  const dealer = totaliser(cards.dealer);

  logTotal([sam, dealer]);

  if (sam > 21) {
    console.log("Sam's total is greater than 21, Dealer wins!");
  } else if (dealer > 21) {
    console.log("Dealers's total is greater than 21, Sam wins!");
  }

  if (sam === 21 || dealer === 21) {
    let winner = "It's a draw";
    if (sam === 21 && dealer !== 21) {
      winner = 'Sam wins!';
    } else if (dealer === 21 && sam !== 21) {
      winner = 'Dealer wins!';
    }
    console.log(winner);
  }
};

const startGame = () => {
  console.log('Game started \n');

  const gameDeck = shuffleDeck();
  const initialCards = dealCards(gameDeck);
  logInitialMove(initialCards);
  evaluateCards(initialCards);
};

startGame();
