/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    // Helper function to perform DFS traversal
    const dfs = (node, maxValue) => {
        if (!node) return 0;

        // If the value of the current node is greater than or equal to the maxValue,
        // then it is a good node, so increment the count by 1
        const count = node.val >= maxValue ? 1 : 0;

        // Recursively traverse the left and right subtrees,
        // passing the maximum value seen so far
        const leftCount = dfs(node.left, Math.max(maxValue, node.val));
        const rightCount = dfs(node.right, Math.max(maxValue, node.val));

        // Return the sum of counts from left and right subtrees,
        // plus the count for the current node
        return count + leftCount + rightCount;
    };

    // Start DFS traversal from the root with an initial maximum value of negative infinity
    return dfs(root, Number.NEGATIVE_INFINITY);
};
