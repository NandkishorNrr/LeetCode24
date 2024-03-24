function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }

    const dfs = (node, currentSum) => {
        // If the current node is a leaf node, check if the sum equals the targetSum
        if (!node.left && !node.right) {
            return currentSum + node.val === targetSum;
        }

        // Recursively check the left and right subtrees
        if (node.left && dfs(node.left, currentSum + node.val)) {
            return true;
        }
        if (node.right && dfs(node.right, currentSum + node.val)) {
            return true;
        }

        return false;
    };

    return dfs(root, 0);
};
