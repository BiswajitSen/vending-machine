const getQuotient = function(divisor, dividend) {
  return Math.floor(divisor / dividend);
}

const findMin = function(numbers){
  let min = numbers[0];

  for(let index = 0; index <  numbers.length; index++) {
    min = Math.min(min, numbers[index]);
  }

  return min;
}

const minSort = function(numbers) {
  let numberSet = numbers.slice(0);
  const sortedSet = [];

  for(let i = 0; i < numberSet.length; i++){
    const currentMin = findMin(numberSet);
    const currentMinIndex = numberSet.indexOf(currentMin);

    sortedSet.unshift(currentMin);
    numberSet[currentMinIndex] = Infinity;
  }
  return sortedSet;
}

const dispenseCoins = function(rupees, currencies) {
  let count = 0;
  let totalMoney = rupees;
  let requiresCurrencies = currencies.slice(0);

  requiresCurrencies = minSort(requiresCurrencies);

  for (const current of requiresCurrencies) {
    count += getQuotient(totalMoney, current);
    totalMoney %= current;
  }

  return count += totalMoney;

}

exports.dispenseCoins = dispenseCoins;
exports.minSort = minSort;
exports.findMin = findMin;
