var firstNum;
var secondNum;
var operator;
var shouldResetDisplay = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        document.getElementById("display").innerHTML = 'Error: Division by zero';
        throw new Error('Division by zero');
    }
    return a / b;
}

function operate(operator, firstNum, secondNum) {
    // Convert strings to numbers
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    if (operator === '+') { return add(firstNum, secondNum); }
    else if (operator === '-') { return subtract(firstNum, secondNum); }
    else if (operator === '*') { return multiply(firstNum, secondNum); }
    else if (operator === '/') { return divide(firstNum, secondNum); }
}

function submit() {
    if (!operator || !firstNum) return; // Don't evaluate if we don't have both numbers and operator

    secondNum = document.getElementById("display").innerHTML;
    const result = operate(operator, firstNum, secondNum);
    document.getElementById("display").innerHTML = result;

    // Reset the state
    firstNum = null;
    secondNum = null;
    operator = null;
    shouldResetDisplay = true;
}

function clickNumber(button) {
    var display = document.getElementById("display");

    // If we should reset the display (after an operation), clear it first
    if (shouldResetDisplay) {
        display.innerHTML = '';
        shouldResetDisplay = false;
    }

    var x = button.value;
    display.innerHTML += x;
}

function clickOperator(button) {
    var newOperator = button.value;
    var currentValue = document.getElementById("display").innerHTML;

    // If we already have an operator and a first number, evaluate the expression
    if (operator && firstNum && currentValue) {
        submit(); // This will evaluate the current expression
        firstNum = document.getElementById("display").innerHTML; // Use the result as the first number
    } else {
        // If this is the first operator, just store the current value
        firstNum = currentValue;
    }

    operator = newOperator;
    shouldResetDisplay = true;
}

function clearNumber() {
    document.getElementById("display").innerText = '';
    firstNum = null;
    secondNum = null;
    operator = null;
    shouldResetDisplay = false;
}