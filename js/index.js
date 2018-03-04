import createDeck from './modules/create-deck';
import shuffleDeck from './modules/shuffle-deck';
import totaliser from './modules/totaliser';
import { dealCards, dealOneCard } from './modules/deal-cards';

let makeOneMove;

const logPlayerCards = (cardsInPlay) => {
  console.log(`Sam: ${cardsInPlay.sam.join(', ')}`);
  console.log(`Dealer: ${cardsInPlay.dealer.join(', ')}`);
};

const logTotal = (sam, dealer) => {
  console.log(`\nSam's total: ${sam}`);
  console.log(`Dealer's total: ${dealer} \n`);
};

const hasWon = (sam, dealer) => {
  if ((sam === 21 && dealer === 21) || (sam > 21 && dealer > 21)) {
    return "It's a draw";
  } else if (sam > 21) {
    return "Sam's total is greater than 21, Dealer wins!";
  } else if (dealer > 21) {
    return "Dealers's total is greater than 21, Sam wins!";
  } else if (sam === 21) {
    return 'Sam wins!';
  } else if (dealer === 21) {
    return 'Dealer wins!';
  } else if (sam >= 17 && dealer > sam) {
    return 'Dealer wins!';
  }
  return false;
};

const gameLoop = (cardsInPlay, gameDeck) => {
  const sam = totaliser(cardsInPlay.sam);
  const dealer = totaliser(cardsInPlay.dealer);
  const playerWon = hasWon(sam, dealer);

  logPlayerCards(cardsInPlay);
  logTotal(sam, dealer);

  if (playerWon) {
    console.log(playerWon);
  } else if (sam < 17) {
    makeOneMove('sam', cardsInPlay, gameDeck);
  } else {
    makeOneMove('dealer', cardsInPlay, gameDeck);
  }
};

makeOneMove = (player, cardsInPlay, gameDeck) => {
  const nextCard = dealOneCard(gameDeck);
  cardsInPlay[player].push(nextCard);
  gameLoop(cardsInPlay, gameDeck);
};

const startGame = () => {
  const deck = createDeck();
  const gameDeck = shuffleDeck(deck);
  const cardsInPlay = dealCards(gameDeck);

  console.log('Game started \n');
  gameLoop(cardsInPlay, gameDeck);
};

startGame();
