/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let ans = new Array(Math.floor(nums.length / 3)).fill().map(() => new Array(3).fill(0));

    let index = 0;
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i + 2] - nums[i] <= k) {
            ans[index][2] = nums[i + 2];
            ans[index][0] = nums[i];
            ans[index][1] = nums[i + 1];
            index++;
        } else {
            return [];
        }
    }

    return ans;
};