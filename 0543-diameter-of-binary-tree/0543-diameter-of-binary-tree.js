/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Helper function to calculate the height of a binary tree
const height = function(node) {
    if (node === null) return 0;
    return Math.max(height(node.left), height(node.right)) + 1;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    // Helper function to traverse the tree and update diameter
    const dfs = function(node) {
        if (node === null) return 0;
        
        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);
        
        // Update diameter if the sum of left and right heights is greater
        diameter = Math.max(diameter, leftHeight + rightHeight);
        
        // Return the height of the current subtree
        return Math.max(leftHeight, rightHeight) + 1;
    };
    
    // Start DFS from the root
    dfs(root);
    
    return diameter;
};
