/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = [];
    const removeIndices = new Set();

    // Iterate through the string to find unbalanced parentheses
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                // Unbalanced closing parenthesis
                removeIndices.add(i);
            } else {
                stack.pop();
            }
        }
    }

    // Add remaining unbalanced opening parentheses
    while (stack.length > 0) {
        removeIndices.add(stack.pop());
    }

    // Construct the new string without the removed parentheses
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!removeIndices.has(i)) {
            result += s[i];
        }
    }

    return result;
};
