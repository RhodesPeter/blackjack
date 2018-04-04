import createDeck from './modules/create-deck';
import shuffleDeck from './modules/shuffle-deck';
import totaliser from './modules/totaliser';
import logPlayerCards from './modules/log-player-cards';
import hasWon from './modules/has-won';
import logTotal from './modules/log-total';
import { dealCards, dealOneCard } from './modules/deal-cards';

const consoleColourBlue = '\x1b[34m\x1b';
const escapeConsoleColour = '\x1b[0m';
let makeOneMove;
let round = 0;

const gameLoop = (cardsInPlay, gameDeck) => {
  const sam = totaliser(cardsInPlay.sam);
  const dealer = totaliser(cardsInPlay.dealer);
  const playerWon = hasWon(sam, dealer);
  round += 1;

  console.log(consoleColourBlue, `Round ${round}:`, escapeConsoleColour);
  console.log(logPlayerCards(cardsInPlay));
  console.log(logTotal(sam, dealer));

  if (playerWon) {
    console.log(consoleColourBlue, 'Game over!', escapeConsoleColour);
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

  console.log(consoleColourBlue, 'Game started \n', escapeConsoleColour);
  gameLoop(cardsInPlay, gameDeck);
};

startGame();
