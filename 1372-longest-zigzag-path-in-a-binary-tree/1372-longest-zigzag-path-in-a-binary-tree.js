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
var longestZigZag = function(root) {
    let maxZigZag = 0; // Variable to store the maximum zigzag path length

    // Helper function for DFS traversal
    const dfs = (node, isLeft, length) => {
        if (!node) return;

        maxZigZag = Math.max(maxZigZag, length); // Update the maximum zigzag path length

        // Recursively traverse left and right subtrees
        // and update the length of the zigzag path accordingly
        if (isLeft) {
            dfs(node.left, false, length + 1); // Move to the right child
            dfs(node.right, true, 1); // Start a new zigzag path from the right child
        } else {
            dfs(node.right, true, length + 1); // Move to the left child
            dfs(node.left, false, 1); // Start a new zigzag path from the left child
        }
    };

    // Start DFS traversal from the root
    dfs(root, true, 0);
    dfs(root, false, 0);

    return maxZigZag;
};
