import assert from "assert";
import calculator from "../main.js";

describe("Calculator", function () {
  let firstNum;
  let secondNum;

  // Set up the common values before each test
  beforeEach(function () {
    firstNum = 1;
    secondNum = 2;
  });

  describe(".firstNum", function () {
    it("first input is a valid number", function () {
      assert.strictEqual(typeof firstNum, typeof calculator.firstNum);
    });
  });

  describe(".secondNum", function () {
    it("second input is a valid number", function () {
      assert.strictEqual(typeof secondNum, typeof calculator.secondNum);
    });
  });

  describe(".add()", function () {
    it("returns a number", function () {
      assert.strictEqual(
        typeof (firstNum + secondNum),
        typeof calculator.add(firstNum, secondNum)
      );
    });

    it("returns the sum of two numbers (1, 2)", function () {
      assert.strictEqual(
        firstNum + secondNum,
        calculator.add(firstNum, secondNum)
      );
    });

    it("returns the sum of two large numbers (50, 50)", function () {
      firstNum = 50;
      secondNum = 50;
      assert.strictEqual(
        firstNum + secondNum,
        calculator.add(firstNum, secondNum)
      );
    });

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
    it("returns a number", function () {
      assert.strictEqual(
        typeof (firstNum - secondNum),
        typeof calculator.subtract(firstNum, secondNum)
      );
    });

    it("returns the difference of two numbers (1, 2)", function () {
      assert.strictEqual(
        firstNum - secondNum,
        calculator.subtract(firstNum, secondNum)
      );
    });

    it("returns the difference of two equal numbers (50, 50)", function () {
      firstNum = 50;
      secondNum = 50;
      assert.strictEqual(
        firstNum - secondNum,
        calculator.subtract(firstNum, secondNum)
      );
    });

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
    it("returns a number", function () {
      assert.strictEqual(
        typeof (firstNum * secondNum),
        typeof calculator.multiply(firstNum, secondNum)
      );
    });

    it("returns the product of two numbers (1, 2)", function () {
      assert.strictEqual(
        firstNum * secondNum,
        calculator.multiply(firstNum, secondNum)
      );
    });

    it("returns the product of two large numbers (50, 50)", function () {
      firstNum = 50;
      secondNum = 50;
      assert.strictEqual(
        firstNum * secondNum,
        calculator.multiply(firstNum, secondNum)
      );
    });

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
    it("returns a number", function () {
      assert.strictEqual(
        typeof (firstNum / secondNum),
        typeof calculator.divide(firstNum, secondNum)
      );
    });

    it("returns the quotient of two numbers (1, 2)", function () {
      assert.strictEqual(
        firstNum / secondNum,
        calculator.divide(firstNum, secondNum)
      );
    });

    it("returns the quotient of two large numbers (50, 50)", function () {
      firstNum = 50;
      secondNum = 50;
      assert.strictEqual(
        firstNum / secondNum,
        calculator.divide(firstNum, secondNum)
      );
    });

    it("returns the quotient of two decimal numbers (0.7, 0.2)", function () {
      firstNum = 0.7;
      secondNum = 0.2;
      assert.strictEqual(
        firstNum / secondNum,
        calculator.divide(firstNum, secondNum)
      );
    });

    it("returns 'Infinity' when dividing by 0", function () {
      secondNum = 0;
      assert.strictEqual(calculator.divide(firstNum, secondNum), Infinity);
    });
  });
});
