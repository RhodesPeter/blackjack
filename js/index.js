import createDeck from './modules/create-deck';
import shuffleDeck from './modules/shuffle-deck';
import totaliser from './modules/totaliser';
import logPlayerCards from './modules/log-player-cards';
import hasWon from './modules/has-won';
import logTotal from './modules/log-total';
import { dealCards, dealOneCard } from './modules/deal-cards';

let makeOneMove;

const gameLoop = (cardsInPlay, gameDeck) => {
  const sam = totaliser(cardsInPlay.sam);
  const dealer = totaliser(cardsInPlay.dealer);
  const playerWon = hasWon(sam, dealer);

  console.log(logPlayerCards(cardsInPlay));
  console.log(logTotal(sam, dealer));

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
