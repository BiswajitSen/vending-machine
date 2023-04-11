const testLog = [];

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
  for (let log of getTestLog()) {
    if (!group[log[key]]) group[log[key]] = [];
    group[log[key]].push(log);
  }

  return group;
}

// ------------------------------------ PRINT FUNCTION TEST -------------------------------------

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

exports.assertTest = assertTest;
exports.groupLogByKey = groupLogByKey;

