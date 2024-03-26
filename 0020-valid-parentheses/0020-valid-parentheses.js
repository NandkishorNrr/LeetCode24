/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(" || char === "[" || char === "{") {
            // If the character is an opening parenthesis, push it onto the stack
            stack.push(char);
        } else {
            // If the character is a closing parenthesis
            const top = stack.pop(); // Pop the top element from the stack
            // Check if the corresponding opening parenthesis matches the current closing parenthesis
            if (map[top] !== char) {
                return false; // If not, the string is invalid
            }
        }
    }

    // If there are remaining elements in the stack, the string is invalid
    return stack.length === 0;
};
