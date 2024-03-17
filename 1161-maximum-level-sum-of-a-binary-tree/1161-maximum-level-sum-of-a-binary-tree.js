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
 * @return {number}
 */
var maxLevelSum = function(root) {
    if (!root) return 0; // If root is null, return 0
    
    let maxSum = -Infinity; // Initialize maxSum to negative infinity
    let maxLevel = 1; // Initialize maxLevel to 1
    let level = 1; // Initialize current level to 1
    
    const queue = [root]; // Initialize queue with root node
    
    while (queue.length) {
        let size = queue.length;
        let sum = 0; // Initialize sum for the current level
        
        // Process all nodes at the current level
        for (let i = 0; i < size; i++) {
            let node = queue.shift(); // Dequeue node
            
            sum += node.val; // Update sum for the current level
            
            // Enqueue left and right children if they exist
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        // Update maxSum and maxLevel if sum for current level is greater
        if (sum > maxSum) {
            maxSum = sum;
            maxLevel = level;
        }
        
        level++; // Move to the next level
    }
    
    return maxLevel;
};
