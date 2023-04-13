const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const test = function() {
  testing.assertTest(2, vendingMachine.dispenseCoins(2, [1]), 'for rs. 2 should be 2 coin');
  testing.assertTest(2, vendingMachine.dispenseCoins(3, [1, 2]),'for rs. 3 should be 2 coins');
  testing.assertTest(1, vendingMachine.dispenseCoins(5, [1, 2, 5]),'for rs. 5 should be 1 coins');
  testing.assertTest(2, vendingMachine.dispenseCoins(7, [1, 2, 5]), 'for rs. 7 should be 2 coins');
  testing.assertTest(2, vendingMachine.dispenseCoins(20, [1, 2, 5, 10]),'for rs. 20 should be 2 coins');
  testing.assertTest(4, vendingMachine.dispenseCoins(13, [1, 4, 7]), 'for rs. 13 should be 4 coins sorted ascending order');
  testing.assertTest(4, vendingMachine.dispenseCoins(13, [7, 4, 1]), 'for rs. 13 should be 4 coins decending order');
  testing.assertTest(4, vendingMachine.dispenseCoins(13, [1, 4, 7]), 'for rs. 13 should be 4 coins ');

  testing.assertArray([42, 7, 1], vendingMachine.minSort([1, 42, 7]), 'elements should be in ascending order.' );
  testing.assertArray([42], vendingMachine.minSort([42]), 'sort of one element' );
  testing.assertTest(1, vendingMachine.findMin([7, 3, 1]), 'in the set [7, 3, 1] 1 should be the min' );

  testing.displaySummary();
}


test();

