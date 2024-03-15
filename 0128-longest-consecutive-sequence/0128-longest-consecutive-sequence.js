var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    // Convert the array into a set for O(1) lookup
    const numSet = new Set(nums);

    let maxLength = 0;

    // Iterate through each number in the array
    for (const num of nums) {
        // Check if the current number is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            // Increment the current number and length while the next consecutive number exists in the set
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            // Update maxLength if the current length is greater
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};
