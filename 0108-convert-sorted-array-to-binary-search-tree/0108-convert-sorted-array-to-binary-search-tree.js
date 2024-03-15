function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;

    // Find the middle element of the array
    const mid = Math.floor(nums.length / 2);

    // Create a new TreeNode with the middle element as the root
    const root = new TreeNode(nums[mid]);

    // Recursively construct the left subtree with elements before the middle element
    root.left = sortedArrayToBST(nums.slice(0, mid));

    // Recursively construct the right subtree with elements after the middle element
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
};
