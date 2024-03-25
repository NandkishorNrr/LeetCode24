/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var BSTIterator = function(root) {
    this.stack = [];
    this.pushAllLeft(root);
};

BSTIterator.prototype.pushAllLeft = function(node) {
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
};

BSTIterator.prototype.next = function() {
    const node = this.stack.pop();
    if (node.right) {
        this.pushAllLeft(node.right);
    }
    return node.val;
};

BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};
