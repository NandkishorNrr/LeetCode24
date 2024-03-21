var singleNumber = function(nums) {
    let result = 0;

    // XOR all numbers in the array
    for (const num of nums) {
        result ^= num;
    }

    return result;
};
