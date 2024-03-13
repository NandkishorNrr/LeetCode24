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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];

    // Define a helper function for inorder traversal
    const inorder = function(node) {
        if (node) {
            // Traverse the left subtree
            inorder(node.left);
            // Visit the current node
            result.push(node.val);
            // Traverse the right subtree
            inorder(node.right);
        }
    };

    // Start the inorder traversal from the root
    inorder(root);

    return result;
};
