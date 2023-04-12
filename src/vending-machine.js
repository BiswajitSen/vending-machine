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
    sortedSet.push(currentMin);
    numberSet = remove(numberSet, numberSet.indexOf(currentMin));
  }
  return sortedSet;
}

const remove = function(list, index){
  return list.slice(0,index).concat(list.slice(index+1));
}


const sort = function(numbers) {
  for(let i = 0; i < numbers.length; i++){
    for(let j = 0; j < numbers.length; j++) {
      if(numbers[j] > numbers[j+1]){
        numbers[j+1] = numbers[j+1] ^ numbers[j];
        numbers[j] = numbers[j+1] ^ numbers[j];
        numbers[j+1] = numbers[j+1] ^ numbers[j];
      }
    }
  }
  return numbers;
}

const dispenseCoins = function(rupees, currencies) {
  let count = 0;
  let totalMoney = rupees;
  let requiresCurrencies = currencies.slice(0);

  requiresCurrencies = sort(requiresCurrencies)
  for ( let current = currencies.length - 1; current >= 0; current--) {
    count += getCoinsCount(totalMoney, currencies[current]);
    totalMoney %= currencies[current];
  }

  return count += totalMoney;

}

exports.dispenseCoins = dispenseCoins;
exports.minSort = minSort;
exports.getMin = getMin;
