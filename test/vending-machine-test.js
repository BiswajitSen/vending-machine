const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const test = function() {
  testing.assertTest(2, vendingMachine.dispenseCoins(2, [1]), '2 coins should be vend, denominations: [1]');
  testing.assertTest(2, vendingMachine.dispenseCoins(3, [1, 2]),'3 coins should be vend, denominations: [1,2]');
  testing.assertTest(1, vendingMachine.dispenseCoins(5, [1, 2, 5]),'1 coin should be vend, denominations: [1, 2, 5]');
  testing.assertTest(2, vendingMachine.dispenseCoins(7, [1, 2, 5]), '7 coins should be vend, denominations: [1, 2, 5, 10]');
  testing.assertTest(2, vendingMachine.dispenseCoins(20, [1, 2, 5, 10]),'2 coins should be vend, denominations: [1, 2, 5, 10]');

  testing.assertTest(4, vendingMachine.dispenseCoins(13, [1, 4, 7]), '4 coins should be vend, denominations: [1, 4, 7]');
  testing.assertTest(4, vendingMachine.dispenseCoins(13, [7, 4, 1]), '4 coins should be vend, denominations: [7, 4, 1]');
  testing.assertTest(4, vendingMachine.dispenseCoins(13, [1, 7, 4]), '4 coins should be vend, denominations: [1, 7, 4]');

  testing.assertArray([42, 7, 1], vendingMachine.minSort([1, 42, 7]), '[1,42,7] should be sorted to [42, 7, 1]' );
  testing.assertArray([42], vendingMachine.minSort([42]), 'Sorting array of one element should return the same array.');
  testing.assertTest(1, vendingMachine.findMin([7, 3, 1]), 'In the set [7, 3, 1], 1 should be the minimum value');

  testing.displaySummary();
}


test();

