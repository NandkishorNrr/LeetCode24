var minReorder = function(n, connections) {
    const graph = {}; // Adjacency list to represent the graph
    const visited = new Array(n).fill(false); // Keep track of visited nodes
    let count = 0; // Variable to count reorders
    
    // Initialize the graph with the connections
    for (const [from, to] of connections) {
        if (!graph[from]) graph[from] = [];
        if (!graph[to]) graph[to] = [];
        graph[from].push(to);
        graph[to].push(-from); // Mark reverse connection with negative sign
    }
    
    // Define DFS function
    const dfs = (node) => {
        visited[node] = true;
        for (const neighbor of graph[node]) {
            if (!visited[Math.abs(neighbor)]) {
                // If the neighbor represents a forward connection, increment count
                if (neighbor > 0) count++;
                dfs(Math.abs(neighbor));
            }
        }
    };
    
    // Start DFS from the first city
    dfs(0);
    
    return count;
};
