/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // If the root is null or either p or q is the root, return root
    if (root === null || root === p || root === q) {
        return root;
    }

    // Recursively find LCA in left and right subtrees
    const leftLCA = lowestCommonAncestor(root.left, p, q);
    const rightLCA = lowestCommonAncestor(root.right, p, q);

    // If both left and right LCA are not null, it means p and q are in different subtrees of the current root
    // So, the current root is the LCA
    if (leftLCA !== null && rightLCA !== null) {
        return root;
    }

    // Otherwise, return the non-null LCA (if any)
    return leftLCA !== null ? leftLCA : rightLCA;
};
