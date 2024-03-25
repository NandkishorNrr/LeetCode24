/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var countNodes = function(root) {
    if (!root) {
        return 0;
    }
    
    // Recursively count nodes in left and right subtrees
    const leftCount = countNodes(root.left);
    const rightCount = countNodes(root.right);
    
    // Add 1 for the current node
    return leftCount + rightCount + 1;
};
