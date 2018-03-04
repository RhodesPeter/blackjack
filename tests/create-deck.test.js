import createDeck from '../js/modules/create-deck';

const test = require('tape');

test('Check createDeck produces a complete deck of cards', (t) => {
  const flattenedDeck = createDeck().reduce((a, b) => a.concat(b));
  const suits = ['Heart', 'Diamonds', 'Spades', 'Clubs'];
  const filterBySuit = suit => flattenedDeck.filter(s => s.match(suit));

  t.equal(createDeck().length, 4, 'array has 4 values (one for each suit)');
  t.equal(flattenedDeck.length, 52, 'flattened array has 52 values');
  t.equal(flattenedDeck.map(s => +s.match(/\d+/)).reduce((a, b) => a + b), 216, 'full deck of number cards totals 216');

  suits.forEach(suit => t.equal(filterBySuit(suit).length, 13, `array has 13 ${suit} cards`));
  suits.forEach(suit => t.equal(filterBySuit(suit).map(s => +s.match(/\d+/)).reduce((a, b) => a + b), 54, `${suit} number cards total 54`));

  t.end();
});

// check correct number of and type of picture cards
