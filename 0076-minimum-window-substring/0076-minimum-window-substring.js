var minWindow = function(s, t) {
    // Initialize arrays to store character frequencies
    const targetFreq = {};
    const windowFreq = {};

    // Populate targetFreq with character frequencies from string t
    for (const char of t) {
        targetFreq[char] = (targetFreq[char] || 0) + 1;
    }

    // Variables to keep track of the window start and end
    let left = 0;
    let right = 0;

    // Variables to keep track of the minimum window substring
    let minLen = Infinity;
    let minWindowStr = '';

    // Variable to keep track of the number of characters in t that are yet to be included in the window
    let requiredChars = Object.keys(targetFreq).length;

    // Main loop
    while (right < s.length) {
        const char = s[right];
        windowFreq[char] = (windowFreq[char] || 0) + 1;

        // Check if the current character is required for the window
        if (targetFreq[char] !== undefined && windowFreq[char] === targetFreq[char]) {
            requiredChars--;
        }

        // Try to minimize the window by moving the left pointer
        while (left <= right && requiredChars === 0) {
            const windowSize = right - left + 1;

            // Update the minimum window substring
            if (windowSize < minLen) {
                minLen = windowSize;
                minWindowStr = s.substring(left, right + 1);
            }

            // Move the left pointer and update the window frequency
            const leftChar = s[left];
            windowFreq[leftChar]--;

            // Check if removing the left character still maintains the inclusion of required characters
            if (targetFreq[leftChar] !== undefined && windowFreq[leftChar] < targetFreq[leftChar]) {
                requiredChars++;
            }

            left++;
        }

        // Expand the window by moving the right pointer
        right++;
    }

    return minWindowStr;
};