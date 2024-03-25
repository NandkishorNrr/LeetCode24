/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var sumNumbers = function(root) {
    if (!root) return 0;

    let totalSum = 0;

    function dfs(node, currentSum) {
        if (!node.left && !node.right) {
            // Leaf node reached, add the current number formed by the path to the total sum
            totalSum += currentSum * 10 + node.val;
            return;
        }

        if (node.left) {
            dfs(node.left, currentSum * 10 + node.val);
        }

        if (node.right) {
            dfs(node.right, currentSum * 10 + node.val);
        }
    }

    dfs(root, 0);

    return totalSum;
};
