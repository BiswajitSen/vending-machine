const testLog = [];

function redText (text) {
  return "\033[4;31m" + text + "\033[0m";
}

function greenText (text) {
  return "\033[4;32m" + text + "\033[0m";
}


// ---------------------------------------- UPDATE TEST LOG ----------------------------------------

const updateTestLog = function(expected, actual, message, result, functionName) {
  testLog.push(
    {
      result,
      message,
      expected,
      actual,
      functionName
    });
}

// ---------------------------------------- GET TEST LOG ----------------------------------------

const getTestLog = function () {
  return testLog;
}

// ------------------------------------ GET NO OF TEST PASSED -------------------------------------

const getNoOfTestPassed = function (log) {
  let noOfTestPassed = 0;
  for ( const entry of log) {
    noOfTestPassed +=  entry.result === true ? 1 : 0;
  }
  return noOfTestPassed;
}

// ------------------------------------ GROUP LOG BY KEY -------------------------------------

const groupLogByKey = function (key) {
  const group = {};
  for (const log of getTestLog()) {
    if (!group[log[key]]) group[log[key]] = [];
    group[log[key]].push(log);
  }

  return group;
}

// ------------------------------------ PRINT FUNCTION TEST -------------------------------------

const getFailedCases = function() {
  const group = groupLogByKey('result');
  const falseReport = group['false'];

  if(falseReport !== undefined) {
    console.log(redText('failed : '), falseReport);
  }
}

const printFunctionTests = function(functionName) {
  const group = groupLogByKey("functionName");
  console.table(group[functionName]);
  console.log("No of Test Passed = ", getNoOfTestPassed(group[functionName]) + "/" + group[functionName].length);
}

// --------------------------------------- PRINT ALL TEST -------------------------------------

const printAllTest = function() {
  const log = getTestLog();
  console.table(log);
  console.log("No of Test Passed = ", getNoOfTestPassed(log) + "/" + log.length);
}

// --------------------------------------- PRINT SUMMARY -------------------------------------

const displaySummary = function() {
  const log = getTestLog();
  console.log(greenText("No of Test Passed:")," ",getNoOfTestPassed(log) + "/" + log.length);
}

// --------------------------------------- ARE ARRAY EQUAL -------------------------------------

const areArrayEqual = function (arrayOne, arrayTwo){
  if (arrayOne.length !== arrayTwo.length){
    return false;
  };

  let index = 0;

  while (index < arrayOne.index){
    if (arrayOne[index] !== arrayTwo[index]){
      return false;
    };
  };

  return true;
}


const assertTest = function(expected, actual, message, functionName) {
  const result = expected === actual;
  updateTestLog(expected, actual, message, result, functionName);
}

const assertTestForArray = function(expected, actual, message, functionName) {
  const result = areArrayEqual(expected, actual);
  updateTestLog(expected, actual, message, result, functionName);
}
exports.assertTest = assertTest;
exports.groupLogByKey = groupLogByKey;
exports.getFailedCases = getFailedCases;
exports.displaySummary = displaySummary;
exports.assertTestForArray = assertTestForArray;
