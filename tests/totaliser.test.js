import totaliser from '../js/modules/totaliser';

const test = require('tape');

test('totaliser returns the correct object', (t) => {
  const mockCards = ['3 Clubs', 'J Hearts'];
  t.equal(typeof totaliser(mockCards), 'number', 'return value is an integer');

  const mockCards1 = ['2 Diamonds', '2 Hearts'];
  t.equal(totaliser(mockCards1), 4, 'cards total 4');

  const mockCards2 = ['7 Heards', '3 Clubs'];
  t.equal(totaliser(mockCards2), 10, 'cards total 10');

  const mockCards3 = ['2 Spades', 'K Hearts'];
  t.equal(totaliser(mockCards3), 12, 'cards total 12');

  const mockCards4 = ['A Clubs', 'A Spades'];
  t.equal(totaliser(mockCards4), 22, 'cards total 20');

  const mockCards5 = ['Q Hearts', 'A Spades'];
  t.equal(totaliser(mockCards5), 21, 'cards total 21');

  t.end();
});
