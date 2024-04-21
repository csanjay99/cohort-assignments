/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = parseFloat('0');
    this.expression = ''
  }

  add(num) {
    this.result += num;
  }

  sub(num) {
    this.result -= num;
  }
  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0 || this.result === 0) return "Cannot divide by zero";
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  checkInvalidChar(input) {
    let regex = /[a-zA-Z]/;
    let matches = input.match(regex);
    if (matches !== null) {
      throw new Error("Invalid non-numerical characters found in the input string.");
    }
  }
  calculate(strInput) {
    this.checkInvalidChar(strInput)
    let inputsArray = strInput.split(' ');
    inputsArray = inputsArray.filter((s) => s !== "");
    let inputString = inputsArray.join('');
    let re1 = /\(/gi,
      result1,
      openBracketIndices = [];
    while ((result1 = re1.exec(inputString))) {
      openBracketIndices.push(result1.index);
    }
    console.log(openBracketIndices);
    let openBracketIndicesReverse = openBracketIndices.reverse();
    console.log(openBracketIndicesReverse);
    let re2 = /\)/gi,
      result2,
      closeBracketIndices = [];
    while ((result2 = re2.exec(inputString))) {
      closeBracketIndices.push(result2.index);
    }
    console.log(closeBracketIndices);
    let prevSubstr;
    for (let j = 0; j < openBracketIndices.length; j++) {
      let newSubstr = inputString.slice(openBracketIndices[j], closeBracketIndices[j] + 1)
      console.log("Substring: " + newSubstr);
      if (prevSubstr !== '') {
        newSubstr = newSubstr.replace(prevSubstr, `${this.result}`);
      }
      let operandIndex = newSubstr[2];
      let value;
      switch (operandIndex) {
        case '+':
          value = parseInt(newSubstr[1]) + parseInt(newSubstr[3]);
          break
        case '-':
          value = parseInt(newSubstr[1]) - parseInt(newSubstr[3]);
          break;
        case '*':
          value = parseInt(newSubstr[1]) * parseInt(newSubstr[3]);
          break;
        case '/':
          value = parseInt(newSubstr[1]) / parseInt(newSubstr[3]);
          break
        default:
          throw new Error("Invalid non-numerical characters found in the input string.");
      }
      this.result += value;
      prevSubstr = newSubstr;

    }

    inputString = inputString.replace(inputString.slice(openBracketIndicesReverse[-1], closeBracketIndices[-1]), "");
    console.log("Input String: " + inputString);
  }


}

// module.exports = Calculator;

c = new Calculator();
c.calculate("10 + 2 * ( 6 - (4 + 1) / 2 ) + 7");