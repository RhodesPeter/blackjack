import hasWon from '../js/modules/has-won';

const test = require('tape');

test('hasWon function returns the correct winner', (t) => {
  t.notOk(hasWon(2, 3), 'no winners should return false');
  t.equal(hasWon(21, 21), "It's a draw", '(21, 21) should return a draw');
  t.equal(hasWon(22, 2), "Sam's total is greater than 21, Dealer wins!", '(22, 2) should return ...Dealer wins');
  t.equal(hasWon(2, 22), "Dealers's total is greater than 21, Sam wins!", '(2, 22) should return ...Sam wins');
  t.equal(hasWon(21, 2), 'Sam wins!', '(21, 2) should return ...Sam wins');
  t.equal(hasWon(2, 21), 'Dealer wins!', '(2, 21) should return ...Dealer wins');

  t.end();
});
