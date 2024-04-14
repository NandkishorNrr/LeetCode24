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
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    
    let sum = 0;

    const traverse = (node, isLeft) => {
        if (!node.left && !node.right && isLeft) {
            sum += node.val;
            return;
        }

        if (node.left) traverse(node.left, true);
        if (node.right) traverse(node.right, false);
    };

    traverse(root, false);

    return sum;
};
