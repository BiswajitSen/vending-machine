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

const dispenseCoins = function(rupees, currencies) {
  let count = 0;
  let totalMoney = rupees;
  let requiresCurrencies = currencies.slice(0);

  requiresCurrencies = bubbleSort(requiresCurrencies);

  for (const current of requiresCurrencies) {
    count += getQuotient(totalMoney, current);
    totalMoney %= current;
  }

  return count += totalMoney;

}

exports.dispenseCoins = dispenseCoins;
exports.bubbleSort = bubbleSort;
;
