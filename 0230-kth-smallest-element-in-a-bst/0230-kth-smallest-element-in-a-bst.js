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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const stack = [];
    let currentNode = root;
    let count = 0;

    while (currentNode !== null || stack.length !== 0) {
        // Traverse left subtree and push nodes onto stack
        while (currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        // Pop the top node from the stack
        currentNode = stack.pop();
        count++;

        // If this is the kth smallest node, return its value
        if (count === k) {
            return currentNode.val;
        }

        // Move to the right subtree
        currentNode = currentNode.right;
    }

    // If k is greater than the number of nodes in the BST, return null or throw an error
    return null;
};
