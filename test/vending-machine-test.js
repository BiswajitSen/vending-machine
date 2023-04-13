const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const calculateTotalCoins = vendingMachine.calculateTotalCoins;
const getOptimunDistribution = vendingMachine.getOptimumDistribution;
const displayTestLog = testing.displayTestLog;
const displaySummary = testing.displaySummary;

const testSortedCoinsInput = function() {
  let message = 'When ammount is equal to the coin value should return 1 coin';
  testing.assertTest(1, calculateTotalCoins(1, [1]), message);
  testing.assertTest(2, calculateTotalCoins(3, [1, 2]),'For amount 3, with denominations [1, 2], 2 coins should be vend');
  testing.assertTest(1, calculateTotalCoins(5, [1, 2, 5]),'For amount 5, with denominations [1, 2, 5], 1 coin should be vend');
  testing.assertTest(2, calculateTotalCoins(7, [1, 2, 5]), 'For amount 7, with denominations [1, 2, 5], 2 coins should be vend');
  testing.assertTest(2, calculateTotalCoins(20, [1, 2, 5, 10]),'For amount 20, with denominations [1, 2, 5, 10], 2 coins should be vend');

}

const testincludesSortingDinomination = function(){
  testing.assertTest(4, calculateTotalCoins(13, [1, 4, 7]), 'For amount 13, with denominations [1, 4, 7], 4 coins should be vend');
  testing.assertTest(4, calculateTotalCoins(13, [7, 4, 1]), 'For amount 13, with denominations [7, 4, 1], 4 coins should be vend');
  testing.assertTest(4, calculateTotalCoins(13, [1, 7, 4]), 'For amount 13, with denominations [1, 7, 4], 4 coins should be vend');

}

const testEachCoinCount = function(){
  let message = 'For amount 12, with denominations [1, 7, 4], one coin of each should vend';
  testing.assertTestObj({ '1': 1, '4': 1, '7': 1 }, getOptimunDistribution(12, [1, 7, 4]), message);

  message = 'For amount 1, with denominations [1, 3, 8], only one coin should vend of value 1';
  testing.assertTestObj({ '1': 1, '4': 0, '7': 0 }, getOptimunDistribution(1, [1, 7, 4]), message);
}

const test = function() {
  testSortedCoinsInput();
  testincludesSortingDinomination();
  testEachCoinCount();
  displaySummary();

}


test();

