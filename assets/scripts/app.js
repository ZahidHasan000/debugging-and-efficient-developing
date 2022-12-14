const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

//Get input from input fields
function getUserNumberInput() {
    // return parseInt(usrInput.value);

    // return parse(usrInput.value);  its a massage error prblm

    return parseInt(usrInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc}  ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //From vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {

    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        Number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;

    console.log('INPUT', enteredNumber, currentResult);

    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);

    writeToLog('ADD', initialResult, enteredNumber, currentResult);

}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);

    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);

}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    createAndWriteOutput('*', initialResult, enteredNumber);
    currentResult *= enteredNumber;

    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);

}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);

    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);   