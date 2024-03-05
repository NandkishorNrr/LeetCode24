/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right && s[left] === s[right]) {
        const currentChar = s[left];
        
        // Move left pointer to the right while the characters match
        while (left <= right && s[left] === currentChar) {
            left++;
        }
        
        // Move right pointer to the left while the characters match
        while (left <= right && s[right] === currentChar) {
            right--;
        }
    }
    
    // The minimum length after applying the algorithm is the distance between left and right pointers
    return right - left + 1;
};
