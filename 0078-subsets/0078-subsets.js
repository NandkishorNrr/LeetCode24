function subsets(nums) {
    const result = [];
    
    // Helper function to backtrack and find subsets
    const backtrack = (start, current) => {
        // Add the current subset to the result
        result.push([...current]);
        
        // Iterate through the remaining elements from 'start' index
        for (let i = start; i < nums.length; i++) {
            // Include the current element in the subset
            current.push(nums[i]);
            // Recursively backtrack with the updated subset and move to the next index
            backtrack(i + 1, current);
            // Exclude the current element from the subset for backtracking
            current.pop();
        }
    };
    
    // Start backtracking from the beginning with an empty subset
    backtrack(0, []);
    
    return result;
}
