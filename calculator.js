let screenPrevValue = document.getElementById('prev-value');
let screenActualValue = document.getElementById('actual-value');
let btnNumber = document.querySelectorAll('.btn-number');
let btnOperator = document.querySelectorAll('.btn-operator');
let prevValue = '';
let actualValue = '';
let operator = undefined;

//LISTENERS
btnNumber.forEach((button) => {
  button.addEventListener('click', () => addNumber(button.innerText));
});
btnOperator.forEach((button) => {
  button.addEventListener('click', () => compute(button.innerText));
});
document.getElementById('btn-clear').addEventListener('click', () => clear());
document.getElementById('btn-delete').addEventListener('click', () =>delNumber());

const addNumber = (num) => {
  if (num === '.' && actualValue.includes('.')) return;
  actualValue = actualValue.toString() + num.toString();
  printNumbers();
};

const delNumber = () => {
  actualValue = actualValue.slice(0, -1);
  printNumbers();
}

const printNumbers = () => {
  operator === undefined || operator === '='
    ? (screenPrevValue.innerText = prevValue)
    : (screenPrevValue.innerText = prevValue + operator);
  screenActualValue.innerText = actualValue;
};

const clear = () => {
  prevValue = '';
  actualValue = '';
  operator = undefined;
  printNumbers();
};

// OPERATIONS

function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function compute (operatorInput) {
  operate();
  operator = operatorInput;
  prevValue = actualValue || prevValue;
  actualValue = '';
  printNumbers();
}

function operate() {
  const num1 = parseFloat(prevValue).toFixed(2);
  const num2 = parseFloat(actualValue).toFixed(2);
  if (isNaN(num1) || isNaN(num2)) return;
  switch (operator) {
    case '+': {
      actualValue = parseFloat(add(num1, num2)).toFixed(2);
      break;
    }
    case '-': {
      actualValue = parseFloat(substract(num1, num2)).toFixed(2);
      break;
    }
    case '*': {
      actualValue = parseFloat(multiply(num1, num2)).toFixed(2);
      break;
    }
    case '/': {
      actualValue = parseFloat(divide(num1, num2)).toFixed(2);
    }
    default : {
      console.log('No operation available.')
    }
  }
  return actualValue;
}
