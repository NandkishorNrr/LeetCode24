function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var rightSideView = function(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let rightmost = null;

        // Traverse all nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            // Update the rightmost node at this level
            rightmost = node.val;

            // Add the children of the current node to the queue
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // After traversing all nodes at the current level, add the rightmost node to the result
        result.push(rightmost);
    }

    return result;
};
