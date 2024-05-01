var reversePrefix = function(word, ch) {
    // Find the index of the first occurrence of ch in word
    const index = word.indexOf(ch);
    
    // If ch is not found or it's at the beginning of the word, return the original word
    if (index === -1 || index === 0) {
        return word;
    }
    
    // Reverse the substring from the beginning of the word up to the first occurrence of ch
    const reversedSubstring = word.substring(0, index + 1).split('').reverse().join('');
    
    // Concatenate the reversed substring with the rest of the word
    return reversedSubstring + word.substring(index + 1);
};
