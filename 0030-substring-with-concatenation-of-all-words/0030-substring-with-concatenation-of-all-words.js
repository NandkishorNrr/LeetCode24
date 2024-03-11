var findSubstring = function(s, words) {
    const wordLength = words[0].length;
    const totalWords = words.length;
    const totalLength = wordLength * totalWords;
    const result = [];
    
    if (s.length < totalLength) return result;

    const wordMap = {};
    words.forEach(word => {
        if (wordMap[word]) wordMap[word]++;
        else wordMap[word] = 1;
    });
    
    for (let i = 0; i <= s.length - totalLength; i++) {
        const seen = {};
        let j = 0;

        while (j < totalWords) {
            const word = s.substring(i + j * wordLength, i + (j + 1) * wordLength);
            if (!(word in wordMap)) break;

            if (word in seen) seen[word]++;
            else seen[word] = 1;

            if (seen[word] > wordMap[word]) break;
            
            j++;
        }

        if (j === totalWords) result.push(i);
    }

    return result;
};

// Example usage:
console.log(findSubstring("barfoothefoobarman", ["foo","bar"])); // Output: [0, 9]
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"])); // Output: []
console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])); // Output: [6, 9, 12]
