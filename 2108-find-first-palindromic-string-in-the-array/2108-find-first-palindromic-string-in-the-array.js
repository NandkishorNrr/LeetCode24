/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    // Function to check if a string is a palindrome
    function isPalindrome(word) {
        return word === word.split('').reverse().join('');
    }
    
    // Iterate over each word in the array
    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            return words[i]; // Return the first palindrome found
        }
    }
    
    return ""; // Return empty string if no palindrome found
};

