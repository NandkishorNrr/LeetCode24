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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    if (!root) return true; // Empty tree is considered Even-Odd
    
    let queue = [root];
    let level = 0;
    
    while (queue.length) {
        let size = queue.length;
        let prev = null; // To store the previous node's value
        
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            
            // Check conditions based on level index
            if ((level % 2 === 0 && node.val % 2 === 0) ||
                (level % 2 === 1 && node.val % 2 === 1)) {
                return false; // Violates condition
            }
            
            // Check ordering condition
            if (prev !== null && ((level % 2 === 0 && node.val <= prev) ||
                (level % 2 === 1 && node.val >= prev))) {
                return false; // Violates ordering condition
            }
            
            prev = node.val;
            
            // Add children to the queue
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        level++;
    }
    
    return true;
};
