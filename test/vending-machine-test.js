const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const calculateTotalCoins = vendingMachine.calculateTotalCoins;
const getOptimumDistribution = vendingMachine.getOptimumDistribution;
const assertTestObj = testing.assertTestObj;
const assertTest = testing.assertTest;
const displaySummary = testing.displaySummary;
const title = testing.displayHeader;

const it = function (testName, testData) {
  assertTest(testData.expected, testData.actual, testName);
};

const objIt = function (testName, testData) {
  assertTestObj(testData.expected, testData.actual, testName);
};

const testCoinsCount = function() {
  title('countTotalCoins');

  it("should return 0 coins when no denominations are given", {
    actual: calculateTotalCoins(1, []),
    expected: 0,
  });

  it("should return amount when only 1Rs coins can be dispensed", {
    actual: calculateTotalCoins(5, [1]),
    expected: 5,
  });

  it("should return optimum coins count when a set of coins can be dispensed", {
    actual: calculateTotalCoins(9, [5, 2, 1]),
    expected: 3,
  });

  it("should return optimum coins count when an unsorted set of denomination is given", {
    actual: calculateTotalCoins(10, [5, 1, 4]),
    expected: 2,
  });
}


const testEachCoinCounts = function(){
  title('Each coin count');

  objIt("should return optimum coins count of each denominations when an unsorted set of denomination is given", {
    actual: getOptimumDistribution(10, [5, 1, 4]),
    expected: {5: 2, 4: 0, 1: 0},
  });

  objIt("should return 1 coin of the same value if denomination is given", {
    actual: getOptimumDistribution(5, [5, 1, 4]),
    expected: {5: 1, 1: 0, 4: 0},
  });

}

const test = function() {
  testCoinsCount();
  testEachCoinCounts();
  displaySummary();
}


test();

