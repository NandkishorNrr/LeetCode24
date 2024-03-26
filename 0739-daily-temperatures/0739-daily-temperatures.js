var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const topIndex = stack.pop();
            result[topIndex] = i - topIndex;
        }
        stack.push(i);
    }
    
    return result;
};
