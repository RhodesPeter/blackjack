import logTotal from '../js/modules/log-total';

const test = require('tape');

test('logTotal function returns players totals', (t) => {
  const testStr = "\nSam's total: 17\nDealer's total: 10 \n";
  t.equal(logTotal(17, 10), testStr, "Sam's total: 17, Dealer's total: 10");

  const testStr2 = "\nSam's total: 4\nDealer's total: 21 \n";
  t.equal(logTotal(4, 21), testStr2, "Sam's total: 4, Dealer's total: 21");

  const testStr3 = "\nSam's total: 11\nDealer's total: 21 \n";
  t.equal(logTotal('11', '21'), testStr3, "Sam's total: 11, Dealer's total: 21");

  t.end();
});
