function permute(nums) {
    const result = [];
    
    // Helper function to backtrack and find permutations
    const backtrack = (current) => {
        // Base case: if the current permutation's length equals the length of nums, add it to result
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        
        // Loop through nums to find available choices
        for (let num of nums) {
            // If current number is already in the current permutation, skip it
            if (current.includes(num)) {
                continue;
            }
            // Add current number to current permutation
            current.push(num);
            // Recursively backtrack with updated current permutation
            backtrack(current);
            // Remove the last added number for backtracking
            current.pop();
        }
    };
    
    // Start backtracking with an empty current array
    backtrack([]);
    
    return result;
}
