"use strict";

import { round, calculate } from "./utils/helpers.js";

const display = document.getElementById("display");
const keys = document.querySelector(".calculator__keys");
const historyDisplay = document.getElementById("history");

const state = {
  firstValue: null,
  operator: null,
  waitingForSecondValue: false,
};

//[99 -]
let history = [];

function renderHistory() {
  historyDisplay.textContent = history.join(" ");
}

function resetHistory() {
  history = [];
  renderHistory();
}

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
      history.unshift(buttonContent);
      renderHistory();
      break;

    case "decimal":
      if (!displayedNum.includes(".")) {
        display.value = displayedNum + ".";
      }
      history.unshift(buttonContent);
      renderHistory();
      break;

    case "operator":
      handleOperator(buttonContent, displayedNum);
      history.unshift(buttonContent);
      renderHistory();
      break;

    case "clear":
      resetCalculator();
      resetHistory();
      break;

    case "calculate":
      performCalculation(displayedNum);
      history.unshift(display.value, "=");
      renderHistory();
      state.operator = null;
      break;
  }
});

function handleOperator(nextOperator, displayedNum) {
  const { firstValue, operator } = state;
  const inputValue = parseFloat(displayedNum);

  if (operator && state.waitingForSecondValue) {
    state.operator = nextOperator;
    return;
  }

  if (state.firstValue == null) {
    state.firstValue = inputValue;
  } else if (operator) {
    let result = calculate(firstValue, operator, inputValue);
    result = round(result, 10);
    display.value = result;
    state.firstValue = result;
  }

  state.waitingForSecondValue = true;
  state.operator = nextOperator;
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
  let result = calculate(state.firstValue, state.operator, secondValue);
  result = round(result, 10);
  display.value = result;
  state.firstValue = result;
  state.waitingForSecondValue = true;
}

resetCalculator();
resetHistory();
