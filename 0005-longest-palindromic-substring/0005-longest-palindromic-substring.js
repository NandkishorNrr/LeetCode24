/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0) return ""; // Edge case: empty string
    
    let longestPalindromeStart = 0; // Start index of the longest palindrome
    let longestPalindromeLength = 1; // Length of the longest palindrome
    
    // Create a 2D array to store whether substrings are palindromes
    const isPalindrome = Array(s.length).fill(false).map(() => Array(s.length).fill(false));
    
    // All substrings of length 1 are palindromes
    for (let i = 0; i < s.length; i++) {
        isPalindrome[i][i] = true;
    }
    
    // Check substrings of length 2
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            isPalindrome[i][i + 1] = true;
            longestPalindromeStart = i;
            longestPalindromeLength = 2;
        }
    }
    
    // Check substrings of length greater than 2
    for (let len = 3; len <= s.length; len++) {
        for (let start = 0; start <= s.length - len; start++) {
            let end = start + len - 1; // Calculate the end index
            if (s[start] === s[end] && isPalindrome[start + 1][end - 1]) {
                isPalindrome[start][end] = true;
                longestPalindromeStart = start;
                longestPalindromeLength = len;
            }
        }
    }
    
    // Extract the longest palindrome substring
    return s.substring(longestPalindromeStart, longestPalindromeStart + longestPalindromeLength);
};
