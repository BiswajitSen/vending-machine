const getQuotient = function(divisor, dividend) {
  return Math.floor(divisor / dividend);
}

const bubbleSort = function(list){
  const numbers = list.slice(0);

  for(let i = 0; i < numbers.length - 1; i++){
    for(let j = 0; j < numbers.length - i - 1; j++){
      if(numbers[j] < numbers[j + 1]){
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
}

const dispenseCoinsWithValue = function(rupees, currencies) {
  let reminingMoney = rupees;
  const denominationCount = {};
  const denominations = bubbleSort(currencies.slice(0));

  for (const denomination of denominations) {
    const coinsCount = getQuotient(reminingMoney, denomination);
    reminingMoney %= denomination;
    denominationCount[denomination] = coinsCount;
  }
  return denominationCount;
}

const countTotalCoins = function(coinsCount) {
  let totalCoinCount = 0;
  for (const currentCoinCount of coinsCount) {
    totalCoinCount += currentCoinCount;
  }
  return totalCoinCount;
}

const dispenseCoins = function(rupees, currencies) {
  const coinsCount = dispenseCoinsWithValue(rupees, currencies);
  const denominationList = Object.values(coinsCount);
  return countTotalCoins(denominationList);
}



exports.dispenseCoins = dispenseCoins;
exports.bubbleSort = bubbleSort;
exports.dispenseCoinsWithValue = dispenseCoinsWithValue;
