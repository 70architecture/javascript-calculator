const numbers = [1, 2, 3];
let operator = "";
let firstNumber = 0;
let secondNumber = 0;

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (operator === "") {
            firstNumber = Number(button.textContent);
            console.log("firstNumber:", firstNumber);
        } else {
            secondNumber = Number(button.textContent);
            console.log("secondNumber:", secondNumber);
        }

        display.textContent = button.textContent;
    });
});
const display = document.getElementById("display");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const equalButton = document.getElementById("equal");

plusButton.addEventListener("click", function() {
    operator = "+";
    console.log(operator);
});
minusButton.addEventListener("click", function() {
    operator = "-";
});
equalButton.addEventListener("click", function() {
    if (operator === "+") {
        firstNumber = firstNumber + secondNumber;
    }

    if (operator === "-") {
        firstNumber = firstNumber - secondNumber;
    }

    display.textContent = firstNumber;

    secondNumber = 0;
    operator = "";
});
numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        display.textContent = button.textContent;
    });
});
