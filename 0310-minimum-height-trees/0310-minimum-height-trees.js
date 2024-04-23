/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0];
    
    // Create adjacency list
    const adjList = Array.from({ length: n }, () => []);
    const degree = Array(n).fill(0);
    
    for (const [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
        degree[u]++;
        degree[v]++;
    }
    
    // Queue for BFS
    const queue = [];
    
    // Initialize queue with leaves
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) {
            queue.push(i);
        }
    }
    
    // Initialize result
    let result = [];
    
    // Continue the process until less than 2 nodes remain
    while (n > 2) {
        const length = queue.length;
        n -= length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            for (const neighbor of adjList[node]) {
                degree[neighbor]--;
                if (degree[neighbor] === 1) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    // Add remaining nodes to result
    result = queue.slice();
    
    return result;
};

// Example usage:
const n = 6;
const edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]];
console.log(findMinHeightTrees(n, edges)); // Output: [3, 4]
