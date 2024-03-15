var decodeString = function(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i]);
        } else {
            let current = '';
            while (stack.length && stack[stack.length - 1] !== '[') {
                current = stack.pop() + current;
            }
            stack.pop(); // Pop '['
            
            let count = '';
            while (stack.length && !isNaN(stack[stack.length - 1])) {
                count = stack.pop() + count;
            }
            count = parseInt(count);
            
            stack.push(current.repeat(count));
        }
    }
    
    return stack.join('');
};
