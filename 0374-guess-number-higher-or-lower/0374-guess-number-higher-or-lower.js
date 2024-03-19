/**
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

var guessNumber = function(n) {
    let left = 1;
    let right = n;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let result = guess(mid);
        
        if (result === 0) {
            return mid; // Found the correct number
        } else if (result === -1) {
            // The picked number is higher, so search in the left half
            right = mid - 1;
        } else {
            // The picked number is lower, so search in the right half
            left = mid + 1;
        }
    }
    
    // If the loop terminates without finding the correct number, return -1
    return -1;
};

