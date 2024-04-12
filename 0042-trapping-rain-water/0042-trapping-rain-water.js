/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            // If height[left] is smaller, process left side
            if (height[left] >= leftMax) {
                // Update leftMax
                leftMax = height[left];
            } else {
                // Add trapped water
                totalWater += leftMax - height[left];
            }
            // Move left pointer
            left++;
        } else {
            // If height[right] is smaller, process right side
            if (height[right] >= rightMax) {
                // Update rightMax
                rightMax = height[right];
            } else {
                // Add trapped water
                totalWater += rightMax - height[right];
            }
            // Move right pointer
            right--;
        }
    }

    return totalWater;
};
