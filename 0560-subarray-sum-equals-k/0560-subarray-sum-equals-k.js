var subarraySum = function(nums, k) {
    // Initialize variables
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1); // Initialize map with sum 0 with frequency 1

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the cumulative sum
        sum += nums[i];
        
        // Check if there exists a subarray with sum (sum - k)
        if (map.has(sum - k)) {
            count += map.get(sum - k); // Increment count by the frequency of (sum - k)
        }

        // Update the frequency of the current sum
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);
        }
    }

    return count;
};
