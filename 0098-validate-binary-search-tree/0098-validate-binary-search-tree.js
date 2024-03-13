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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // Stack for iterative inorder traversal
    const stack = [];
    // Variable to track the previous node's value
    let prev = null;
    
    // Iterative inorder traversal
    while (root || stack.length > 0) {
        // Move to the leftmost node
        while (root) {
            stack.push(root);
            root = root.left;
        }
        
        // Visit the current node
        root = stack.pop();
        
        // Check if the current node's value is greater than or equal to the previous node's value
        if (prev !== null && root.val <= prev) {
            return false;
        }
        
        // Update prev to the current node's value
        prev = root.val;
        
        // Move to the right subtree
        root = root.right;
    }
    
    // If all nodes have been visited and the BST property is maintained, return true
    return true;
};
