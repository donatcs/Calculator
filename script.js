const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let firstNumber = "";
let secondNumber = "";
let operator = "";

numbers.forEach((numBtn) => {
  numBtn.addEventListener("click", function (event) {
    if (operator === "") {
      firstNumber += event.target.innerText;
      console.log(parseInt(firstNumber));
      display.textContent = parseInt(firstNumber);
    } else {
      secondNumber += event.target.innerText;
      console.log(parseInt(event.target.innerText));
      display.textContent = Number.parseInt(secondNumber);
    }
  });
});

const inputNumber = (number) => {
  const screenNumber = Number.parseInt(display.textContent);
  if (screenNumber.length < 16)
    display.textContent =
      Number.parseInt(screenNumber) + Number.parseInt(number);
};

const inputOperator = (operator) => {
  const screenOperator = display.textContent;
  if (screenOperator.length < 16)
    display.textContent = screenOperator + operator;
};

operators.forEach((opBtn) => {
  opBtn.addEventListener("click", function (event) {
    if (event.target.innerText !== "=") {
      operator = event.target.innerText;
    } else {
      switch (operator) {
        case "+":
          lastValue = parseInt(firstNumber) + parseInt(secondNumber);
          firstNumber = lastValue;
          secondNumber = "";
          operator = "";
          display.textContent = lastValue;
          break;

        case "-":
          lovely = parseInt(firstNumber) - parseInt(secondNumber);
          firstNumber = lastValue;
          secondNumber = "";
          operator = "";
          display.textContent = lastValue;
          break;

        case "*":
          lastValue = parseInt(firstNumber) * parseInt(secondNumber);
          firstNumber = lastValue;
          secondNumber = "";
          operator = "";
          display.textContent = lastValue;
          break;

        case "/":
          lastValue = parseInt(firstNumber) / parseInt(secondNumber);
          firstNumber = lastValue;
          secondNumber = "";
          operator = "";
          display.textContent = lastValue;
          break;

        default:
          break;
      }
    }
  });
});

let clearBtn = document.getElementById("AC");

clearBtn.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.textContent = "0";
});

let resetBtn = document.getElementById("DEL");

resetBtn.addEventListener("click", () => {
  firstNumber = firstNumber.substring(0, firstNumber.length * 1 - 1);
  secondNumber = secondNumber.substring(0, secondNumber.length * 1 - 1);
  operator = operator.substring(0, operator.length * 1 - 1);
  display.textContent = display.textContent.substring(
    0,
    display.textContent.length * 1 - 1
  );
});
