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
var isSymmetric = function(root) {
    // Check if the tree is symmetric by comparing left and right subtrees
    const isMirror = function(left, right) {
        // If both subtrees are null, they are symmetric
        if (!left && !right) {
            return true;
        }
        // If one subtree is null while the other is not, they are not symmetric
        if (!left || !right) {
            return false;
        }
        // Check if the current nodes are equal and their subtrees are symmetric
        return (left.val === right.val) && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    };
    
    // Start the symmetry check from the root node
    return isMirror(root, root);
};
