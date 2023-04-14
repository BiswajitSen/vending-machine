const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const calculateTotalCoins = vendingMachine.calculateTotalCoins;
const getOptimunDistribution = vendingMachine.getOptimumDistribution;
const assertTest = testing.assertTest;
const displaySummary = testing.displaySummary;
const title = testing.displayHeader;

const testCoinsCount = function() {
  title('countTotalCoins');

  let message = 'Provided amount is equal to the coin value should return 1 coin';
  assertTest(1, calculateTotalCoins(1, [1]), message);

  message = 'Provided no amount, should return 0 coins';
  assertTest(0, calculateTotalCoins(0, [1]), message);

  message = 'Provided an amount with ordered denominations';
  assertTest(3, calculateTotalCoins(9, [5, 2, 1]), message);

  message = 'Provided an amount with unordered denominations';
  assertTest(3, calculateTotalCoins(9, [2, 5, 1]), message);
}


const testEachCoinCounts = function(){
  title('Each coin count');

  let message = 'For amount 12, with denominations [1, 7, 4], one coin of each should vend';
  testing.assertTestObj({ '1': 1, '4': 1, '7': 1 }, getOptimunDistribution(12, [1, 7, 4]), message);

  message = 'For amount 1, with denominations [1, 3, 8], only one coin should vend of value 1';
  testing.assertTestObj({ '1': 1, '4': 0, '7': 0 }, getOptimunDistribution(1, [1, 7, 4]), message);
}

const test = function() {
  testCoinsCount();
  testEachCoinCounts();
  displaySummary();
}


test();

