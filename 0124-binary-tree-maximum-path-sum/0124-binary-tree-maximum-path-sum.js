var maxPathSum = function(root) {
    let maxSum = -Infinity; // Initialize global maximum path sum

    // Helper function to compute maximum path sum starting from the current node
    const maxPathSumHelper = function(node) {
        if (!node) return 0; // Base case

        // Recursively compute maximum path sum of left and right subtrees
        const leftSum = Math.max(0, maxPathSumHelper(node.left)); // Maximum path sum of left subtree
        const rightSum = Math.max(0, maxPathSumHelper(node.right)); // Maximum path sum of right subtree
        
        // Calculate maximum path sum that passes through the current node
        const currentSum = node.val + leftSum + rightSum;

        // Update global maximum path sum
        maxSum = Math.max(maxSum, currentSum);

        // Return maximum path sum starting from the current node
        return node.val + Math.max(leftSum, rightSum);
    };

    // Start recursion from the root node
    maxPathSumHelper(root);

    // Return the global maximum path sum
    return maxSum;
};
