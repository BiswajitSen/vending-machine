const bubbleSort = function(array){
  const numbers = array.slice(0);

  for(let pass = 0; pass < numbers.length - 1; pass++){
    for(let index = 0; index < numbers.length - pass - 1; index++){
      if(numbers[index] < numbers[index + 1]){
        const temp = numbers[index];
        numbers[index] = numbers[index + 1];
        numbers[index + 1] = temp;
      }
    }
  }

  return numbers;
}

exports.bubbleSort = bubbleSort;
