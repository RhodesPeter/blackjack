import shuffleDeck from '../js/modules/shuffle-deck';

const test = require('tape');

const deck = [
  ['2 Hearts', '3 Hearts', '4 Hearts', '5 Hearts', '6 Hearts', '7 Hearts', '8 Hearts', '9 Hearts', '10 Hearts', 'J Hearts', 'Q Hearts', 'K Hearts', 'A Hearts'],
  ['2 Diamonds', '3 Diamonds', '4 Diamonds', '5 Diamonds', '6 Diamonds', '7 Diamonds', '8 Diamonds', '9 Diamonds', '10 Diamonds', 'J Diamonds', 'Q Diamonds', 'K Diamonds', 'A Diamonds'],
  ['2 Spades', '3 Spades', '4 Spades', '5 Spades', '6 Spades', '7 Spades', '8 Spades', '9 Spades', '10 Spades', 'J Spades', 'Q Spades', 'K Spades', 'A Spades'],
  ['2 Clubs', '3 Clubs', '4 Clubs', '5 Clubs', '6 Clubs', '7 Clubs', '8 Clubs', '9 Clubs', '10 Clubs', 'J Clubs', 'Q Clubs', 'K Clubs', 'A Clubs'],
];

test('ShuffleDeck returns a complete deck of cards', (t) => {
  const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  const pictureCards = ['J', 'Q', 'K', 'A'];
  const filterBySuit = suit => shuffleDeck(deck).filter(s => s.match(suit));

  t.equal(shuffleDeck(deck).length, 52, 'deck is flattened and has 52 values');
  t.equal(shuffleDeck(deck)
    .map(s => +s.match(/\d+/))
    .reduce((a, b) => a + b), 216, 'full deck of number cards totals 216');

  suits.forEach(suit => t.equal(filterBySuit(suit).length, 13, `array has 13 ${suit} cards`));

  suits.forEach(suit => t.equal(filterBySuit(suit)
    .map(s => +s.match(/\d+/))
    .reduce((a, b) => a + b), 54, `${suit} number cards total 54`));

  suits.forEach(suit => t.ok(filterBySuit(suit)
    .filter(s => s.match(/[JQKA]/))
    .every(card => pictureCards.includes(card.split(' ')[0])), `${suit} have all 4 picture cards`));

  t.end();
});

test('ShuffleDeck returns a shuffled deck of cards', (t) => {
  const flattenedDeck = fullDeck => fullDeck.reduce((a, b) => a.concat(b));
  t.notDeepEqual(shuffleDeck(deck), flattenedDeck(deck), 'shuffled deck differs from the original');

  for (let i = 0; i < 10; i += 1) {
    const shuffled = shuffleDeck(deck);
    const samePositionCards = flattenedDeck(deck).filter((card, ii) => card === shuffled[ii]);
    t.ok(samePositionCards.length < 8, `no more than 8 cards are in thier original position, count: ${samePositionCards.length}`);
  }

  t.end();
});
