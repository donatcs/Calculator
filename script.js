const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let firstNumber = Number("");
let secondNumber = Number("");
let operator = "";
let lastValue = "";


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


operators.forEach((opBtn) => {
  opBtn.addEventListener("click", function (event) {
    if (event.target.innerText !== "=") {
      if (operator === ""){
        operator = event.target.innerText;
      } else { 
        runCalculation();
        operator = event.target.innerText;
      }
    } else {
      runCalculation()
    }
  });
});

function runCalculation(){ 
  switch (operator) {
        case "+":
          lastValue = parseInt(firstNumber) + parseInt(secondNumber);
          firstNumber = lastValue;
          secondNumber = "";
          display.textContent = lastValue;
          break;


        case "-":
          lastValue = parseInt(firstNumber) - parseInt(secondNumber);
          firstNumber = lastValue;
          secondNumber = "";
          display.textContent = lastValue;
          break;


        case "*":
          lastValue = parseInt(firstNumber) * parseInt(secondNumber);
          firstNumber = lastValue;
          secondNumber = "";
          display.textContent = lastValue;
          break;


        case "/":
          lastValue = (parseInt(firstNumber) / parseInt(secondNumber)).toFixed(2);
          firstNumber = lastValue;
          secondNumber = "";
          display.textContent = lastValue;
          break;
          
        default:
          break;
      }
      operator = "";
}

///
let clearBtn = document.getElementById("AC");

clearBtn.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.textContent = "0";
});


///
let resetBtn = document.getElementById("DEL");

resetBtn.addEventListener("click", () => {

  firstNumber = firstNumber.slice(0, -1);

  display.textContent = display.textContent.slice(0, -1);

});

