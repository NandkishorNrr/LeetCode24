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
var maxDepth = function(root) {
    // If the root is null, the depth is 0
    if (!root) {
        return 0;
    }
    
    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    // Return the maximum depth of the left and right subtrees, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
};
