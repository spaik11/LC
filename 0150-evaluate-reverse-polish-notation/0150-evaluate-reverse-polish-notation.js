/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (tokens.length === 1) return parseInt(tokens[0]);
    let result = 0;
    const stack = [];
    const operatorMap = {
    '+': 0,
    '-': 0,
    '*': 0,
    '/': 0,
    };

    for (const val of tokens) {
        if (val in operatorMap) {
            const num1 = stack.pop();
            const num2 = stack.pop();

            result = helperFunction(num1, num2, val);
            stack.push(result);
        } else {
          stack.push(parseInt(val));
        }
    }

    return parseInt(result);
    };


const helperFunction = (num1, num2, operator) => {
    switch ((num1, num2, operator)) {
    case '+':
      return num2 + num1;
    case '-':
      return num2 - num1;
    case '*':
      return num2 * num1;
    case '/':
      return parseInt(num2 / num1);
    }
};