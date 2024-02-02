/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const result = [];
    const digits = "123456789";
    
    const numDigitsLow = low.toString().length;
    const numDigitsHigh = high.toString().length;

    for (let i = numDigitsLow; i <= numDigitsHigh; i++) {
        for (let j = 1; j <= 9 - i + 1; j++) {
            const num = generateSequential(j, i);
            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }

    return result;
};

// Helper function to generate sequential digits starting from a given digit
function generateSequential(startDigit, numDigits) {
    let result = 0;
    for (let i = 0; i < numDigits; i++) {
        result = result * 10 + (startDigit + i);
    }
    return result;
}

