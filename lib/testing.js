const textStyle = function(styleCode, text) {
  return "\033[" + styleCode + "m" + text + "\033[0m";
}

const bold  = function(text) {
  return textStyle(1, text);
}

const underline  = function(text) {
  return textStyle(4, text);
}

const redfg = function(text) {
  return textStyle(31, text);
}

const greenfg = function(text) {
  return textStyle(32, text);
}

const yellowfg = function(text) {
  return textStyle(33, text);
}

const testLog = [];

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

const getTestLog = function () {
  return testLog;
}

const getNoOfTestPassed = function (log) {
  let noOfTestPassed = 0;
  for ( const entry of log) {
    noOfTestPassed +=  entry.result === true ? 1 : 0;
  }
  return noOfTestPassed;
}

const displaySummary = function () {
  console.log("No of Test Passed = " + getNoOfTestPassed(getTestLog()) + "/" + getTestLog().length);
}

const displayTestLog = function () {
  const log = getTestLog();
  console.table(log);
  displaySummary();
}

const groupTestLogByKey = function (key) {
  const groups = {};
  for (const log of getTestLog()) {
    if (!groups[log[key]])
      groups[log[key]] = [];
    groups[log[key]].push(log);
  }

  return groups;
}

const printFunctionTests = function(functionName) {
  const log = groupTestLogByKey("functionName");
  console.table(log[functionName]);
  console.log("No of Test Passed = ", getNoOfTestPassed(log[functionName]) + "/" + log[functionName].length);
}

const generateFailedMessage = function(expected, actual, testMessage) {
  const expectedValue =  greenfg("\n\tExpected\t:" + expected);
  const actualValue =  redfg("\n\tActual\t\t:" + actual);
  const failMessage = actualValue + expectedValue;

  return failMessage;
}

const displayHeader = function(fnName) {
  const header = "Test for " + fnName;
  console.log("\n" + bold(underline(header)));
}

const displayTestMessage = function(expected, actual, result, testMessage) {
  const icon = result === true ? "✅" : "❌";
  let message = "";
  message += icon;
  message += yellowfg(bold("Test: "));
  message += bold(testMessage);

  if (result === false) {
    message += generateFailedMessage(expected, actual);
  }
  console.log(message);
}

const getResult = function (expected, actual) {
  return expected === actual;
}

const isArraysEqual = function (array1, array2) {
  if (array1 === array2) {
    return true;
  };

  if (array1.length !== array2.length) {
    return false;
  };

  for (let currentTerm = 0; currentTerm < array1.length; currentTerm++) {
    if (array1[currentTerm] !== array2[currentTerm]) {
      return false;
    }
  }

  return true;
}

const assertArray  = function(expected, actual, message, functionName) {
  const result = isArraysEqual(expected, actual);
  updateTestLog(expected, actual, message, result, functionName);
  displayTestMessage(expected, actual, result, message);
}

const assertTest = function(expected, actual, message, functionName) {
  const result = expected === actual ? true : false;
  updateTestLog(expected, actual, message, result, functionName);
  displayTestMessage(expected, actual, result, message);
}

const assertTestObj = function(expected, actual, message, functionName) {

  let result = false;


  if( Object.keys(expected).length !== Object.keys(actual).length){
    updatelog(expected, actual, message, false, functionName);
    // console.log("❌", message ,"\n\tExpected = ",expected,"\t  Actual = ", actual);

    return;
  }

  for(const key in actual){
    if(expected[key]  !== actual[key]){
      updatelog(expected, actual, message, false, functionName);
      // console.log("❌", message ,"\n\tExpected = ",expected,"\t  Actual = ", actual);

      return;
    }
  }
  updatelog(expected, actual, message, true, functionName);
} 

const updatelog = function(expected, actual, message, result, functionName) {
  updateTestLog(expected, actual, message, result, functionName);
  displayTestMessage(expected, actual, result, message);
}


exports.assertTest = assertTest;
exports.assertArray = assertArray;
exports.displaySummary = displaySummary;
exports.displayHeader = displayHeader;
exports.getTestLog = getTestLog;
exports.displayTestLog = displayTestLog;
exports.assertTestObj = assertTestObj;
