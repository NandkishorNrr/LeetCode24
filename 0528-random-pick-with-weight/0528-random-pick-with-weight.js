/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefixSums = [];
    let sum = 0;
    
    // Calculate prefix sums
    for (const weight of w) {
        sum += weight;
        this.prefixSums.push(sum);
    }
    
    this.totalSum = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    // Generate a random number between 1 and totalSum
    const target = Math.floor(Math.random() * this.totalSum) + 1;
    
    // Perform binary search to find the index where prefixSums[i] is greater than or equal to target
    let left = 0;
    let right = this.prefixSums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (this.prefixSums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
