const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");



let firstNumber = "";
let secondNumber = "";
let operator = "";



/* /// this part is going to be implemented later ///

const summButton = document.getElementById("+");

function summ(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function substr(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}
*/


 


numbers.forEach((numBtn) => {
  numBtn.addEventListener("click", function (event) {
    if (operator === "") {
      firstNumber += event.target.innerText;
      display.textContent = firstNumber;
    } else {
      secondNumber += event.target.innerText;

      display.textContent = secondNumber;
      console.log(secondNumber);
    }
  });
});

const inputNumber = (number) => {
  const screenNumber = display.textContent;
  if (screenNumber.length < 16)
    display.textContent = parseInt(screenNumber + number).toString();
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

      console.log(firstNumber); 
      console.log(operator); 
    } else {
      
      switch (
        operator 
      ) {
        case "+":
          console.log(parseInt(firstNumber) + parseInt(secondNumber));
          display.textContent = (parseInt(firstNumber) + parseInt(secondNumber))  
          break;

        case "-":
          console.log(parseInt(firstNumber) - parseInt(secondNumber));
          display.textContent = (parseInt(firstNumber) - parseInt(secondNumber))  
          break;

        case "*":
          console.log(parseInt(firstNumber) * parseInt(secondNumber));
          display.textContent = (parseInt(firstNumber) * parseInt(secondNumber))  
          break;

        case "/":
          console.log(parseInt(firstNumber) / parseInt(secondNumber));
          display.textContent = (parseInt(firstNumber) / parseInt(secondNumber))  
          break;

         
          default:
          break;
      }
    }
  });
});

