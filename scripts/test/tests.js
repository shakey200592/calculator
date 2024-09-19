import assert from "assert";
import calculator from "./main.js";

describe("Calculator", function () {
  let firstNum;
  let secondNum;

  // Set up the common values before each test
  beforeEach(function () {
    firstNum = 1;
    secondNum = 2;
  });

  describe(".firstNum", function () {
    /**
     * Tests that `firstNum` is a valid number.
     */
    it("first input is a valid number", function () {
      assert.strictEqual(typeof firstNum, typeof calculator.firstNum);
    });
  });

  describe(".secondNum", function () {
    /**
     * Tests that `secondNum` is a valid number.
     */
    it("second input is a valid number", function () {
      assert.strictEqual(typeof secondNum, typeof calculator.secondNum);
    });
  });

  describe(".add()", function () {
    /**
     * Tests that `.add()` returns a number.
     */
    it("returns a number", function () {
      assert.strictEqual(
        typeof (firstNum + secondNum),
        typeof calculator.add(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.add()` returns the correct sum of two numbers (1, 2).
     */
    it("returns the sum of two numbers (1, 2)", function () {
      assert.strictEqual(
        firstNum + secondNum,
        calculator.add(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.add()` returns the correct sum of two large numbers (50, 50).
     */
    it("returns the sum of two large numbers (50, 50)", function () {
      firstNum = 50;
      secondNum = 50;
      assert.strictEqual(
        firstNum + secondNum,
        calculator.add(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.add()` returns the correct sum of two decimal numbers (0.7, 0.2).
     */
    it("returns the sum of two decimal numbers (0.7, 0.2)", function () {
      firstNum = 0.7;
      secondNum = 0.2;
      assert.strictEqual(
        firstNum + secondNum,
        calculator.add(firstNum, secondNum)
      );
    });
  });

  describe(".subtract()", function () {
    /**
     * Tests that `.subtract()` returns a number.
     */
    it("returns a number", function () {
      assert.strictEqual(
        typeof (firstNum - secondNum),
        typeof calculator.subtract(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.subtract()` returns the correct difference between two numbers (1, 2).
     */
    it("returns the difference of two numbers (1, 2)", function () {
      assert.strictEqual(
        firstNum - secondNum,
        calculator.subtract(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.subtract()` returns the correct difference between two equal numbers (50, 50).
     */
    it("returns the difference of two equal numbers (50, 50)", function () {
      firstNum = 50;
      secondNum = 50;
      assert.strictEqual(
        firstNum - secondNum,
        calculator.subtract(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.subtract()` returns the correct difference between two decimal numbers (0.7, 0.2).
     */
    it("returns the difference of two decimal numbers (0.7, 0.2)", function () {
      firstNum = 0.7;
      secondNum = 0.2;
      assert.strictEqual(
        firstNum - secondNum,
        calculator.subtract(firstNum, secondNum)
      );
    });
  });

  describe(".multiply()", function () {
    /**
     * Tests that `.multiply()` returns a number.
     */
    it("returns a number", function () {
      assert.strictEqual(
        typeof (firstNum * secondNum),
        typeof calculator.multiply(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.multiply()` returns the correct product of two numbers (1, 2).
     */
    it("returns the product of two numbers (1, 2)", function () {
      assert.strictEqual(
        firstNum * secondNum,
        calculator.multiply(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.multiply()` returns the correct product of two large numbers (50, 50).
     */
    it("returns the product of two large numbers (50, 50)", function () {
      firstNum = 50;
      secondNum = 50;
      assert.strictEqual(
        firstNum * secondNum,
        calculator.multiply(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.multiply()` returns the correct product of two decimal numbers (0.7, 0.2).
     */
    it("returns the product of two decimal numbers (0.7, 0.2)", function () {
      firstNum = 0.7;
      secondNum = 0.2;
      assert.strictEqual(
        firstNum * secondNum,
        calculator.multiply(firstNum, secondNum)
      );
    });
  });

  describe(".divide()", function () {
    /**
     * Tests that `.divide()` returns a number.
     */
    it("returns a number", function () {
      assert.strictEqual(
        typeof (firstNum / secondNum),
        typeof calculator.divide(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.divide()` returns the correct quotient of two numbers (1, 2).
     */
    it("returns the quotient of two numbers (1, 2)", function () {
      assert.strictEqual(
        firstNum / secondNum,
        calculator.divide(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.divide()` returns the correct quotient of two large numbers (50, 50).
     */
    it("returns the quotient of two large numbers (50, 50)", function () {
      firstNum = 50;
      secondNum = 50;
      assert.strictEqual(
        firstNum / secondNum,
        calculator.divide(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.divide()` returns the correct quotient of two decimal numbers (0.7, 0.2).
     */
    it("returns the quotient of two decimal numbers (0.7, 0.2)", function () {
      firstNum = 0.7;
      secondNum = 0.2;
      assert.strictEqual(
        firstNum / secondNum,
        calculator.divide(firstNum, secondNum)
      );
    });

    /**
     * Tests that `.divide()` returns an error message when dividing by zero.
     */
    it("returns 'Error: Division by zero' when dividing by 0", function () {
      secondNum = 0;
      assert.strictEqual(
        calculator.divide(firstNum, secondNum),
        "Error: Division by zero"
      );
    });
  });

  describe(".operate()", function () {
    /**
     * Tests that `.operate()` correctly applies the `.add()` function.
     */
    it("returns 3 when passed (1, 2, .add())", function () {
      assert.strictEqual(
        firstNum + secondNum,
        calculator.operate(firstNum, secondNum, calculator.add)
      );
    });

    /**
     * Tests that `.operate()` correctly applies the `.subtract()` function.
     */
    it("returns -1 when passed (1, 2, .subtract())", function () {
      assert.strictEqual(
        firstNum - secondNum,
        calculator.operate(firstNum, secondNum, calculator.subtract)
      );
    });

    /**
     * Tests that `.operate()` correctly applies the `.multiply()` function.
     */
    it("returns 2 when passed (1, 2, .multiply())", function () {
      assert.strictEqual(
        firstNum * secondNum,
        calculator.operate(firstNum, secondNum, calculator.multiply)
      );
    });

    /**
     * Tests that `.operate()` correctly applies the `.divide()` function.
     */
    it("returns 0.5 when passed (1, 2, .divide())", function () {
      assert.strictEqual(
        firstNum / secondNum,
        calculator.operate(firstNum, secondNum, calculator.divide)
      );
    });
  });

  describe("setter tests", function () {
    let firstNum = 10;
    let secondNum = 20;

    /**
     * Tests that the `firstNum` setter correctly assigns a value.
     */
    it("sets firstNum to 10", function () {
      calculator.firstNum = 10;
      assert.strictEqual(calculator.firstNum, 10);
    });

    /**
     * Tests that the `firstNum` setter can be updated to a new value.
     */
    it("updates firstNum to 20", function () {
      calculator.firstNum = 20;
      assert.strictEqual(calculator.firstNum, 20);
    });
  });
});
