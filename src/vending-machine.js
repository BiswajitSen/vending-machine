const getCoinsCount = function(rupees, value) {
  return Math.floor(rupees / value);
}

const getMin = function(numbers){
  let min = numbers[0];

  for(let i = 0; i <  numbers.length; i++) {
    min = Math.min(min, numbers[i]);
  }

  return min;
}

const minSort = function(numbers) {
  let numberSet = numbers.slice(0);
  const sortedSet = [];

  for(let i = 0; i < numberSet.length; i++){
    const currentMin = getMin(numberSet);
    sortedSet.unshift(currentMin);
    numberSet[numberSet.indexOf(currentMin)] = Infinity;
  }
  return sortedSet;
}

const dispenseCoins = function(rupees, currencies) {
  let count = 0;
  let totalMoney = rupees;
  let requiresCurrencies = currencies.slice(0);

  requiresCurrencies = minSort(requiresCurrencies);

  for ( let current = 0; current < currencies.length; current++) {
    count += getCoinsCount(totalMoney, requiresCurrencies[current]);
    totalMoney %= requiresCurrencies[current];
  }

  return count += totalMoney;

}

exports.dispenseCoins = dispenseCoins;
exports.minSort = minSort;
exports.getMin = getMin;
