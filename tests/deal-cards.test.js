import { dealCards, dealOneCard } from '../js/modules/deal-cards';

const test = require('tape');

test('dealCards returns the correct object', (t) => {
  t.deepEqual(dealCards([1, 2, 3, 4]), { sam: [1, 2], dealer: [3, 4] }, 'returned object deep equals mock object');
  t.equal(typeof dealCards([1, 2, 3, 4]), 'object', 'returned value is an object');
  t.notOk(Array.isArray(dealCards([1, 2, 3, 4])), 'returned object is not an array');

  const { sam, dealer } = dealCards([1, 2, 3, 4]);
  t.deepEqual(sam, [1, 2], 'sam equals [1, 2]');
  t.deepEqual(dealer, [3, 4], 'dealer equals [3, 4]');

  t.end();
});

test('dealOneCard returns the correct value', (t) => {
  t.equal(dealOneCard([1, 2]), 1, 'first number in array returned: 1');
  t.equal(dealOneCard([10, 20]), 10, 'first number in array returned: 10');
  t.equal(typeof dealOneCard(['10', '20']), 'string', 'returned value is an string');

  t.end();
});
