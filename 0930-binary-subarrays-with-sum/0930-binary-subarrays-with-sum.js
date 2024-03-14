var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    let sum = 0;
    let prefixSumCount = new Map();
    prefixSumCount.set(0, 1); // For cases when the sum of elements equals the goal

    for (let num of nums) {
        sum += num;
        count += prefixSumCount.get(sum - goal) || 0;
        prefixSumCount.set(sum, (prefixSumCount.get(sum) || 0) + 1);
    }

    return count;
};
