var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        // Calculate the width of the container
        const width = right - left;
        
        // Calculate the area between the two lines
        const area = Math.min(height[left], height[right]) * width;
        
        // Update the maximum area if the current area is greater
        maxArea = Math.max(maxArea, area);
        
        // Move the pointer pointing to the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};
