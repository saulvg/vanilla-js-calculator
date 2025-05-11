export function round(num, decimals = 10) {
  return (
    Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) /
    Math.pow(10, decimals)
  );
}

export function calculate(firstValue, operator, secondValue) {
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
