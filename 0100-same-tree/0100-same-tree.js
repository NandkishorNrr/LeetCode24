function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var isSameTree = function(p, q) {
    // If both trees are null, they are same
    if (p === null && q === null) {
        return true;
    }
    
    // If one of the trees is null but not the other, they are different
    if (p === null || q === null) {
        return false;
    }
    
    // If values of current nodes are different, trees are different
    if (p.val !== q.val) {
        return false;
    }
    
    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


