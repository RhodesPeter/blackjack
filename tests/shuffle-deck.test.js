import shuffleDeck from '../js/modules/shuffle-deck';

const test = require('tape');

const deck = [
  ['2 Heart', '3 Heart', '4 Heart', '5 Heart', '6 Heart', '7 Heart', '8 Heart', '9 Heart', '10 Heart', 'J Heart', 'Q Heart', 'K Heart', 'A Heart'],
  ['2 Diamonds', '3 Diamonds', '4 Diamonds', '5 Diamonds', '6 Diamonds', '7 Diamonds', '8 Diamonds', '9 Diamonds', '10 Diamonds', 'J Diamonds', 'Q Diamonds', 'K Diamonds', 'A Diamonds'],
  ['2 Spades', '3 Spades', '4 Spades', '5 Spades', '6 Spades', '7 Spades', '8 Spades', '9 Spades', '10 Spades', 'J Spades', 'Q Spades', 'K Spades', 'A Spades'],
  ['2 Clubs', '3 Clubs', '4 Clubs', '5 Clubs', '6 Clubs', '7 Clubs', '8 Clubs', '9 Clubs', '10 Clubs', 'J Clubs', 'Q Clubs', 'K Clubs', 'A Clubs'],
];

test('ShuffleDeck returns a complete deck of cards', (t) => {
  const suits = ['Heart', 'Diamonds', 'Spades', 'Clubs'];
  const filterBySuit = suit => shuffleDeck(deck).filter(s => s.match(suit));

  t.equal(shuffleDeck(deck).length, 52, 'deck is flattened and has 52 values');
  t.equal(shuffleDeck(deck).map(s => +s.match(/\d+/)).reduce((a, b) => a + b), 216, 'full deck of number cards totals 216');

  suits.forEach(suit => t.equal(filterBySuit(suit).length, 13, `array has 13 ${suit} cards`));
  suits.forEach(suit => t.equal(filterBySuit(suit).map(s => +s.match(/\d+/)).reduce((a, b) => a + b), 54, `${suit} number cards total 54`));

  t.end();
});
