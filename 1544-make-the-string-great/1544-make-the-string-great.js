/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];
    
    for (let char of s) {
        let prevChar = stack[stack.length - 1];
        if (prevChar && (char !== prevChar && char.toLowerCase() === prevChar.toLowerCase())) {
            stack.pop(); // Remove the last element from the stack
        } else {
            stack.push(char); // Add the character to the stack
        }
    }
    
    return stack.join('');
};
