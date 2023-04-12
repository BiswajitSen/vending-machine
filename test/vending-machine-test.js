const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const test = function() {
  testing.assertTest(2, vendingMachine.dispenseCoins(2, [1]), '','for rs. 2 should be 2 coin');
  testing.assertTest(2, vendingMachine.dispenseCoins(3, [1, 2]),'','for rs. 3 should be 2 coins');
  testing.assertTest(1, vendingMachine.dispenseCoins(5, [1, 2, 5]), '','for rs. 5 should be 1 coins');
  testing.assertTest(2, vendingMachine.dispenseCoins(7, [1, 2, 5]), '','for rs. 7 should be 2 coins');
  testing.assertTest(2, vendingMachine.dispenseCoins(20, [1, 2, 5, 10]), '','for rs. 20 should be 2 coins');
  testing.assertTest(4, vendingMachine.dispenseCoins(13, [1, 4, 7]), '','for rs. 20 should be 2 coins');

  testing.getFailedCases();
  testing.displaySummary();

}


test();

