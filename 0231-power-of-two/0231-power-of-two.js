/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false; // Negative numbers and zero cannot be powers of two
    
    // Use bitwise AND operation to check if there's only one bit set to 1 in the binary representation of n
    // If n is a power of two, then n & (n - 1) will be 0
    return (n & (n - 1)) === 0;
};
