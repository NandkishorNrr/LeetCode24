function combinationSum(candidates, target) {
    const result = [];
    
    // Helper function to backtrack and find combinations
    const backtrack = (current, start, target) => {
        // Base case: if target becomes zero, add current combination to result
        if (target === 0) {
            result.push([...current]);
            return;
        }
        
        // Loop through candidates starting from 'start'
        for (let i = start; i < candidates.length; i++) {
            // If candidate value is greater than target, skip
            if (candidates[i] > target) {
                continue;
            }
            // Add candidate to current combination
            current.push(candidates[i]);
            // Recursively backtrack with reduced target
            backtrack(current, i, target - candidates[i]);
            // Remove the last added candidate for backtracking
            current.pop();
        }
    };
    
    // Start backtracking from the beginning with an empty current array
    backtrack([], 0, target);
    
    return result;
}

