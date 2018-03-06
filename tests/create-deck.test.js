import createDeck from '../js/modules/create-deck';

const test = require('tape');

test('CreateDeck returns a complete deck of cards', (t) => {
  const flattenedDeck = createDeck().reduce((a, b) => a.concat(b));
  const suits = ['Heart', 'Diamonds', 'Spades', 'Clubs'];
  const pictureCards = ['J', 'Q', 'K', 'A'];
  const filterBySuit = suit => flattenedDeck.filter(s => s.match(suit));

  t.equal(createDeck().length, 4, 'array has 4 values (one for each suit)');
  t.equal(flattenedDeck.length, 52, 'flattened array has 52 values');
  t.equal(flattenedDeck.map(s => +s.match(/\d+/)).reduce((a, b) => a + b), 216, 'full deck of number cards totals 216');

  suits.forEach(suit => t.equal(filterBySuit(suit).length, 13, `array has 13 ${suit} cards`));
  suits.forEach(suit => t.equal(filterBySuit(suit).map(s => +s.match(/\d+/)).reduce((a, b) => a + b), 54, `${suit} number cards total 54`));

  const pictureCardsCheck = cards => cards.map(s => s.split(' ')[0]
    .match(/[JQKA]/))
    .filter(x => x)
    .map(x => x[0])
    .every(card => pictureCards.includes(card));

  createDeck().forEach(suit => t.ok(pictureCardsCheck(suit), `${suit.toString().split(/[, ]/)[1]} cards have all 4 picture cards`));

  t.end();
});
