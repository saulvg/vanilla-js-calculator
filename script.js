"use strict";

const display = document.getElementById("display");
const keys = document.querySelector(".calculator__keys");

const state = {
  firstValue: null,
  operator: null,
  waitingForSecondValue: false,
};

keys.addEventListener("click", (event) => {
  const button = event.target;
  const action = button.dataset.action;
  const buttonContent = button.textContent;
  const displayedNum = display.value;

  if (!action) return;

  switch (action) {
    case "digit":
      if (state.waitingForSecondValue) {
        display.value = buttonContent;
        state.waitingForSecondValue = false;
      } else {
        display.value =
          displayedNum === "0" ? buttonContent : displayedNum + buttonContent;
      }
      break;

    case "decimal":
      if (!displayedNum.includes(".")) {
        display.value = displayedNum + ".";
      }
      break;

    case "operator":
      handleOperator(buttonContent, displayedNum);
      break;

    case "clear":
      resetCalculator();
      break;

    case "calculate":
      performCalculation(displayedNum);
      state.operator = null;
      break;
  }
});

function round(num, decimals = 10) {
  return (
    Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) /
    Math.pow(10, decimals)
  );
}

function handleOperator(nextOperator, displayedNum) {
  const { firstValue, operator } = state;
  const inputValue = parseFloat(displayedNum);

  if (operator && state.waitingForSecondValue) {
    state.operator = nextOperator;
    return;
  }

  if (state.firstValue == null && !isNaN(inputValue)) {
    state.firstValue = inputValue;
  } else if (operator) {
    let result = calculte(firstValue, operator, inputValue);
    result = round(result, 10);
    display.value = result;
    state.firstValue = result;
  }

  state.waitingForSecondValue = true;
  state.operator = nextOperator;
}

function calculte(firstValue, operator, secondValue) {
  switch (operator) {
    case "+":
      return firstValue + secondValue;
    case "-":
      return firstValue - secondValue;
    case "*":
      return firstValue * secondValue;
    case "/":
      return secondValue !== 0 ? firstValue / secondValue : "Error";
    default:
      return secondValue;
  }
}

function resetCalculator() {
  display.value = "0";
  state.firstValue = null;
  state.operator = null;
  state.waitingForSecondValue = false;
}

function performCalculation(displayedNum) {
  if (state.operator == null || state.waitingForSecondValue) return;

  const secondValue = parseFloat(displayedNum);
  let result = calculte(state.firstValue, state.operator, secondValue);
  result = round(result, 10);
  display.value = result;
  state.firstValue = result;
  state.waitingForSecondValue = true;
}

resetCalculator();
