var evalRPN = function(tokens) {
    const stack = [];

    for (const token of tokens) {
        if (!isNaN(token)) { // If token is a number
            stack.push(parseInt(token));
        } else { // If token is an operator
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(parseInt(operand1 / operand2)); // Integer division
                    break;
            }
        }
    }

    return stack.pop(); // Result will be the only element left in the stack
};
