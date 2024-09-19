const calculator = {
  // Internal properties to store the default values for the numbers
  _firstNum: "",
  _secondNum: "",
  memory: "",

  /**
   * Getter for the first number.
   * @returns {number} - The value of the first number.
   */
  get firstNum() {
    return this._firstNum;
  },

  /**
   * Setter for the first number.
   * @param {number} num - The new value for the first number.
   */
  set firstNum(num) {
    this._firstNum = num;
  },

  /**
   * Getter for the second number.
   * @returns {number} - The value of the second number.
   */
  get secondNum() {
    return this._secondNum;
  },

  /**
   * Setter for the second number.
   * @param {number} num - The new value for the second number.
   */
  set secondNum(num) {
    this._secondNum = num;
  },

  /**
   * Adds two numbers.
   * @param {number} num1 - The first number to add.
   * @param {number} num2 - The second number to add.
   * @returns {number} - The sum of the two numbers.
   */
  add(num1, num2) {
    return num1 + num2;
  },

  /**
   * Subtracts the second number from the first number.
   * @param {number} num1 - The number to subtract from.
   * @param {number} num2 - The number to subtract.
   * @returns {number} - The result of the subtraction.
   */
  subtract(num1, num2) {
    return num1 - num2;
  },

  /**
   * Multiplies two numbers.
   * @param {number} num1 - The first number to multiply.
   * @param {number} num2 - The second number to multiply.
   * @returns {number} - The product of the two numbers.
   */
  multiply(num1, num2) {
    return num1 * num2;
  },

  /**
   * Divides the first number by the second number.
   * @param {number} num1 - The dividend.
   * @param {number} num2 - The divisor.
   * @returns {number|string} - The result of the division, or an error message if dividing by zero.
   */
  divide(num1, num2) {
    if (num2 === 0) {
      return "Error: Division by zero";
    }
    return num1 / num2;
  },

  /**
   * Performs a given operation on two numbers.
   * @param {number} num1 - The first number to use in the operation.
   * @param {number} num2 - The second number to use in the operation.
   * @param {Function} operand - A function that takes two numbers and returns a result (e.g., `this.add`, `this.subtract`).
   * @returns {*} - The result of applying the `operand` function to `num1` and `num2`.
   * @throws {Error} - Throws an error if `operand` is not a function.
   */
  operate(num1, num2, operand) {
    if (typeof operand !== "function") {
      throw new Error("Operand must be a function");
    }
    return operand(num1, num2);
  },
};

const calculatorInputElement = document.querySelector("#input");
const inputElements = document.querySelectorAll(".inputs");
const operandElements = document.querySelectorAll(".operand");
const equalsElement = document.querySelector(".equals");
const clearElement = document.querySelector(".clear");

let currentInput = "";
let leftOperator = "";
let rightOperator = "";
let operand = "";
let result = "";

function updateDisplay(value) {
  calculatorInputElement.value = value;
}

function calculate() {
  if (leftOperator && rightOperator) {
    switch (operand) {
      case "+":
        result = calculator.operate(
          parseFloat(leftOperator),
          parseFloat(rightOperator),
          calculator.add
        );
        break;
      case "-":
        result = calculator.operate(
          parseFloat(leftOperator),
          parseFloat(rightOperator),
          calculator.subtract
        );
        break;
      case "X":
        result = calculator.operate(
          parseFloat(leftOperator),
          parseFloat(rightOperator),
          calculator.multiply
        );
        break;
      case "/":
        result = calculator.operate(
          parseFloat(leftOperator),
          parseFloat(rightOperator),
          calculator.divide
        );
        break;
    }
    calculator.memory = result;
    updateDisplay(result);
    leftOperator = result.toString();
    rightOperator = "";
    operand = "";
    currentInput = "";
  }
}

inputElements.forEach((input) => {
  input.addEventListener("click", () => {
    const inputText = input.innerText;

    if (
      input.classList.contains("operand") &&
      inputText !== "=" &&
      inputText !== "AC"
    ) {
      if (leftOperator === "") {
        leftOperator = currentInput;
      } else if (rightOperator === "") {
        rightOperator = currentInput;
        calculate();
      }
      operand = inputText.trim();
      currentInput = "";
    } else if (inputText === "=") {
      if (leftOperator !== "" && currentInput !== "") {
        rightOperator = currentInput;
        calculate();
      }
    } else if (inputText === "AC") {
      currentInput = "";
      leftOperator = "";
      rightOperator = "";
      operand = "";
      result = "";
      updateDisplay("");
    } else {
      currentInput += inputText;
      updateDisplay(currentInput);
    }
  });
});
