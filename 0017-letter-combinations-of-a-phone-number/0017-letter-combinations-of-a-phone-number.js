var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }

    // Mapping of digits to letters
    const phone = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const combinations = [];

    function backtrack(index, path) {
        if (path.length === digits.length) {
            combinations.push(path.join(''));
            return;
        }

        const currentDigit = digits[index];
        const letters = phone[currentDigit];

        for (let letter of letters) {
            path.push(letter);
            backtrack(index + 1, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return combinations;
};

// Test cases
console.log(letterCombinations("23"));  // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(""));    // Output: []
console.log(letterCombinations("2"));    // Output: ["a","b","c"]
