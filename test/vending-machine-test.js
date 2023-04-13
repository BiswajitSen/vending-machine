const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const test = function() {
  testing.assertTest(2, vendingMachine.dispenseCoins(2, [1]), 'For amount 2, with denomination [1], 2 coins should be vend');
  testing.assertTest(2, vendingMachine.dispenseCoins(3, [1, 2]),'For amount 3, with denominations [1, 2], 2 coins should be vend');
  testing.assertTest(1, vendingMachine.dispenseCoins(5, [1, 2, 5]),'For amount 5, with denominations [1, 2, 5], 1 coin should be vend');
  testing.assertTest(2, vendingMachine.dispenseCoins(7, [1, 2, 5]), 'For amount 7, with denominations [1, 2, 5], 2 coins should be vend');
  testing.assertTest(2, vendingMachine.dispenseCoins(20, [1, 2, 5, 10]),'For amount 20, with denominations [1, 2, 5, 10], 2 coins should be vend');

  testing.assertTest(4, vendingMachine.dispenseCoins(13, [1, 4, 7]), 'For amount 13, with denominations [1, 4, 7], 4 coins should be vend');
  testing.assertTest(4, vendingMachine.dispenseCoins(13, [7, 4, 1]), 'For amount 13, with denominations [7, 4, 1], 4 coins should be vend');
  testing.assertTest(4, vendingMachine.dispenseCoins(13, [1, 7, 4]), 'For amount 13, with denominations [1, 7, 4], 4 coins should be vend');

  testing.assertArray([42, 7, 1], vendingMachine.bubbleSort([1, 42, 7]), '[1 ,42 ,7] should be sorted to [42, 7, 1]' );
  testing.assertArray([42], vendingMachine.bubbleSort([42]), 'Sorting array of one element should return the same array.');

  testing.displaySummary();
}


test();

