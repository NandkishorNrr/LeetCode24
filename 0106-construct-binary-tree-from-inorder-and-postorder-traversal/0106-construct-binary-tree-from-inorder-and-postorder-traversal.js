function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }

    // Create a map to store the index of each value in the inorder traversal
    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    const build = function(inStart, inEnd, postStart, postEnd) {
        if (inStart > inEnd || postStart > postEnd) {
            return null;
        }

        // The last element in the postorder traversal is the root of the current subtree
        const rootValue = postorder[postEnd];
        const root = new TreeNode(rootValue);

        // Find the index of the root value in the inorder traversal
        const rootIndexInorder = inorderMap.get(rootValue);

        // Calculate the size of the left subtree
        const leftSubtreeSize = rootIndexInorder - inStart;

        // Recursively build left and right subtrees
        root.left = build(inStart, rootIndexInorder - 1, postStart, postStart + leftSubtreeSize - 1);
        root.right = build(rootIndexInorder + 1, inEnd, postStart + leftSubtreeSize, postEnd - 1);

        return root;
    };

    return build(0, inorder.length - 1, 0, postorder.length - 1);
};
