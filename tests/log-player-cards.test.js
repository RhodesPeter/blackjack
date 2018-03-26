import logPlayerCards from '../js/modules/log-player-cards';

const test = require('tape');

test('logPlayerCards function returns the correct string', (t) => {
  const testObj = {
    sam: ['7 Clubs', 'J Heart'],
    dealer: ['2 Clubs', '5 Spades', '3 Heart'],
  };
  const testStr = 'Sam: 7 Clubs, J Heart \nDealer: 2 Clubs, 5 Spades, 3 Heart';
  t.equal(logPlayerCards(testObj), testStr, '(17, 10) should the correct str');

  const testObj2 = {
    sam: ['A Spades', '3 Heart', '4 Spades'],
    dealer: ['7 Clubs', '6 Clubs', '2 Diamonds'],
  };
  const testStr2 = 'Sam: A Spades, 3 Heart, 4 Spades \nDealer: 7 Clubs, 6 Clubs, 2 Diamonds';
  t.equal(logPlayerCards(testObj2), testStr2, '(18, 15) should the correct str');

  const testObj3 = {
    sam: ['2 Clubs', '2 Heart'],
    dealer: ['5 Clubs', 'A Spades'],
  };
  const testStr3 = 'Sam: 2 Clubs, 2 Heart \nDealer: 5 Clubs, A Spades';
  t.equal(logPlayerCards(testObj3), testStr3, '(4, 16) should the correct str');

  const testObj4 = {
    sam: ['3 Clubs', 'J Heart', '3 Spades', '5 Clubs', 'K Diamonds'],
    dealer: ['K Clubs', '2 Spades', '4 Diamonds', '4 Hearts', '3 Diamonds'],
  };
  const testStr4 = 'Sam: 3 Clubs, J Heart, 3 Spades, 5 Clubs, K Diamonds \nDealer: K Clubs, 2 Spades, 4 Diamonds, 4 Hearts, 3 Diamonds';
  t.equal(logPlayerCards(testObj4), testStr4, '(31, 23) should the correct str');

  t.end();
});
