const testing = require('../lib/testing.js');
const arrayUtilities = require('../lib/array-utils.js');

const bubbleSort = arrayUtilities.bubbleSort
const assertArray = testing.assertArray
const displaySummary = testing.displaySummary;
const title = testing.displayHeader;

const it = function (testName, testData) {
  assertArray(testData.expected, testData.actual, testName);
};

const testBubbleSort = function(){
  title('bubbleSort');

  it('Should return an empty array if an empty array.', {
    actual: bubbleSort([]),
    expected: [],
  });

  it('Should return an equal array if array has one element only.', {
    actual: bubbleSort([1]),
    expected: [1],
  });

  it('Should return sorted array, for array of integers.', {
    actual: bubbleSort([8, 1, 3, 9]),
    expected: [9, 8, 3, 1],
  });

}

const test = function(){
  testBubbleSort();
  displaySummary();  
}

test();
