const numbers = [1, 2, 3];
let operator = "";
let firstNumber = 0;
let secondNumber = 0;
let isCalculated = false;

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (isCalculated === true) {
      firstNumber = 0;
      isCalculated = false;
    }
    if (operator === "") {
      firstNumber = Number(String(firstNumber) + button.textContent);

      display.textContent = firstNumber;
    } else {
      secondNumber = Number(String(secondNumber) + button.textContent);

      display.textContent = secondNumber;
    }
  });
});
const display = document.getElementById("display");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const dividebutton = document.getElementById("divide");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");

plusButton.addEventListener("click", function () {
  operator = "+";
  isCalculated = false;
});
minusButton.addEventListener("click", function () {
  operator = "-";
  isCalculated = false;
});
multiplyButton.addEventListener("click", function () {
  operator = "*";
  isCalculated = false;
});
dividebutton.addEventListener("click", function (){
  operator = "÷";
  isCalculated = false;
});
clearButton.addEventListener("click", function() {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    isCalculated = false;
    display.textContent = 0;
});
decimalButton.addEventListener("click", function() {
    display.textContent = display.textContent + ".";
});
decimalButton.addEventListener("click", function() {
    if (operator === "") {
        if (!String(firstNumber).includes(".")) {
            firstNumber = String(firstNumber) + ".";
            display.textContent = firstNumber;
        }
    } else {
        if (!String(secondNumber).includes(".")) {
            secondNumber = String(secondNumber) + ".";
            display.textContent = secondNumber;
        }
    }
});

equalButton.addEventListener("click", function () {
  if (operator === "+") {
    firstNumber = firstNumber + secondNumber;
  }
  if (operator === "-") {
    firstNumber = firstNumber - secondNumber;
  }
  if (operator === "*") {
    firstNumber = firstNumber * secondNumber;
  }
  if (operator === "÷") {
    firstNumber = firstNumber / secondNumber;
  }

  display.textContent = firstNumber;

  secondNumber = 0;
  operator = "";
  isCalculated = true;
});
