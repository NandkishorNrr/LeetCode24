/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // Base case: if either preorder or inorder is empty, return null
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    
    // The first element in the preorder array is the root of the tree
    const rootValue = preorder[0];
    const root = new TreeNode(rootValue);
    
    // Find the index of the root in the inorder array
    const rootIndexInInorder = inorder.indexOf(rootValue);
    
    // Split the inorder array into left and right subtrees based on the root index
    const inorderLeft = inorder.slice(0, rootIndexInInorder);
    const inorderRight = inorder.slice(rootIndexInInorder + 1);
    
    // Split the preorder array into left and right subtrees based on the lengths of the inorder arrays
    const preorderLeft = preorder.slice(1, 1 + inorderLeft.length);
    const preorderRight = preorder.slice(1 + inorderLeft.length);
    
    // Recursively build the left and right subtrees
    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);
    
    return root;
};
