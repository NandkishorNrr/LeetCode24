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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []; // If the root is null, return an empty array
    
    const result = []; // Array to store the levels
    
    const queue = [root]; // Queue for BFS, start with the root node
    
    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        const levelValues = []; // Array to store values at the current level
        
        // Process nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Dequeue the node
            levelValues.push(node.val); // Push its value to the level array
            
            // Enqueue left and right children if they exist
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(levelValues); // Push the level array to the result
    }
    
    return result;
};
