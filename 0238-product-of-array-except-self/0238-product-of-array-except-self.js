/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const output = new Array(n);
    
    // Compute the prefix products
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] = prefixProduct;
        prefixProduct *= nums[i];
    }
    
    // Compute the suffix products and multiply with prefix products
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }
    
    return output;
};
