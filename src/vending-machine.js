const math = require('../lib/math-utils.js');
const arrayUtilities = require('../lib/array-utils.js');

const quotient = math.quotient;
const remainder = math.remainder;
const sum = math.countTotal;
const sort = arrayUtilities.bubbleSort;

const getOptimumDistribution = function(totalAmount, requiredDenominations){
  const denominations = sort(requiredDenominations.slice(0));
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
  const countedCoins = Object.values(coinsCount);

  return sum(countedCoins);
}

exports.calculateTotalCoins = calculateTotalCoins;
exports.getOptimumDistribution = getOptimumDistribution;

