/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    // Create a map to store the indices of each character in the ring
    const charMap = new Map();
    for (let i = 0; i < ring.length; i++) {
        const char = ring[i];
        if (!charMap.has(char)) {
            charMap.set(char, []);
        }
        charMap.get(char).push(i);
    }

    // Helper function to find the shortest distance between two indices in the ring
    const distance = (i, j) => {
        return Math.min(Math.abs(i - j), ring.length - Math.abs(i - j));
    };

    // Create a memoization table to store calculated results
    const memo = new Map();

    // Recursive function to find the minimum number of steps to spell out the key
    const dfs = (currentIndex, keyIndex) => {
        if (keyIndex === key.length) return 0; // Base case: all characters are spelled out

        const memoKey = currentIndex + ',' + keyIndex;
        if (memo.has(memoKey)) return memo.get(memoKey);

        const currentChar = key[keyIndex];
        const possiblePositions = charMap.get(currentChar);
        let minSteps = Infinity;

        for (const position of possiblePositions) {
            const stepsToRotate = distance(currentIndex, position);
            const stepsToSpellRest = dfs(position, keyIndex + 1);
            const totalSteps = stepsToRotate + stepsToSpellRest;
            minSteps = Math.min(minSteps, totalSteps);
        }

        memo.set(memoKey, minSteps);
        return minSteps;
    };

    // Start the recursive search from index 0 of the ring and key
    return dfs(0, 0) + key.length; // Add key.length because each key press also counts as a step
};
