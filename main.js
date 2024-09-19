let calculator = {
  _firstNum: 0,
  _secondNum: 0,

  get firstNum() {
    return this._firstNum;
  },

  get secondNum() {
    return this._secondNum;
  },

  set firstNum(num) {
    this._firstNum = num;
  },

  set secondNum(num) {
    this._secondNum = num;
  },

  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },

  divide(num1, num2) {
    return num1 / num2;
  },

  operate(num1, num2, operand) {
    return operand(num1, num2);
  },
};

export default calculator;
