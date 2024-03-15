function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var flatten = function(root) {
    if (!root) return;

    // Helper function to perform preorder traversal and flatten the tree
    const preorder = (node) => {
        if (!node) return;

        // Save the right subtree
        const rightSubtree = node.right;

        // If the left subtree exists, move it to the right side of the current node
        if (node.left) {
            node.right = node.left;
            node.left = null;

            // Find the rightmost node of the original left subtree
            let rightmost = node.right;
            while (rightmost.right !== null) {
                rightmost = rightmost.right;
            }

            // Attach the saved right subtree to the rightmost node
            rightmost.right = rightSubtree;
        }

        // Recur for the right subtree
        preorder(node.right);
    };

    // Start preorder traversal from the root
    preorder(root);
};
