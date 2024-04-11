var removeKdigits = function(num, k) {
    const stack = [];
    
    for (let digit of num) {
        while (stack.length > 0 && k > 0 && digit < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    
    // Remove remaining digits if k is not zero
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    // Remove leading zeros
    while (stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }
    
    // If stack is empty, return '0', otherwise join the digits into a string
    return stack.length === 0 ? '0' : stack.join('');
};
