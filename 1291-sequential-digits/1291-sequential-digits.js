/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const result = [];
    
    // Helper function to generate sequential digits starting from a given digit
    function generateSequential(startDigit, current, low, high) {
        if (current > high) {
            return;
        }
        
        if (current >= low && current <= high) {
            result.push(current);
        }
        
        const nextDigit = startDigit + 1;
        
        if (nextDigit <= 9) {
            generateSequential(nextDigit, current * 10 + nextDigit, low, high);
        }
    }
    
    // Iterate over all digits to start the sequence
    for (let i = 1; i <= 9; i++) {
        generateSequential(i, i, low, high);
    }
    
    return result.sort((a, b) => a - b);
};