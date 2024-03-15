/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (const val of asteroids) {
        if (!stack.length || val > 0) {
            stack.push(val);
        } else {
            while (true) {
                const peek = stack[stack.length - 1];
                if (peek < 0) {
                    stack.push(val);
                    break;
                } else if (peek === -val) {
                    stack.pop();
                    break;
                } else if (peek > -val) {
                    break;
                } else {
                    stack.pop();
                    if (!stack.length) {
                        stack.push(val);
                        break;
                    }
                }
            }
        }
    }

    return stack;
};