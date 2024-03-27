var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0; // As product will always be greater than or equal to k

    let count = 0;
    let product = 1;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];

        while (product >= k) {
            product /= nums[left];
            left++;
        }

        count += right - left + 1;
    }

    return count;
};
