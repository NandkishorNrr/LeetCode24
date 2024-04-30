var wonderfulSubstrings = function(word) {
    let result = 0;
    let prefix = new Array(1024).fill(0); // Since there are 10 lowercase letters, we need 2^10 for all possible masks
    let mask = 0;

    prefix[0] = 1;

    for (let i = 0; i < word.length; i++) {
        let charIndex = word.charCodeAt(i) - 97; // Get the index of the letter in the alphabet

        mask ^= 1 << charIndex; // Toggle the bit corresponding to the letter

        result += prefix[mask]; // Add the count of wonderful substrings with the current mask

        for (let j = 0; j < 10; j++) {
            // Increment prefix count for all possible masks by adding the count for the current mask
            result += prefix[mask ^ (1 << j)];
        }

        prefix[mask]++;
    }

    return result;
};
