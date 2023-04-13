const math = require ('../lib/math-utils.js');
const arrayUtilities = require('../lib/array-utils');

const quotient = math.quotient;
const remainder = math.remainder;
const sum = math.countTotal;
const bubbleSort = arrayUtilities.bubbleSort;

const getOptimumDistribution = function(totalAmount, requiredDenominations){
  const denominations = bubbleSort(requiredDenominations.slice(0));
  const coinCounts = {};
  let leftOverAmount = totalAmount;

  for (const denomination of denominations) {
    const coins = quotient(leftOverAmount, denomination);
    leftOverAmount = remainder(leftOverAmount, denomination);
    coinCounts[denomination] = coins;
  }
  return coinCounts;
}

const calculateTotalCoins = function(rupees, requiredDenominations){
  const coinsCount = getOptimumDistribution(rupees, requiredDenominations);
  const denominationList = Object.values(coinsCount);

  return sum(denominationList);
}



exports.calculateTotalCoins = calculateTotalCoins;
exports.getOptimumDistribution = getOptimumDistribution;

