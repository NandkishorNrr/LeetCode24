var calcEquation = function(equations, values, queries) {
    const graph = {}; // Adjacency list to represent the graph
    
    // Build the graph from equations and values
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const value = values[i];
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        graph[a].push([b, value]);
        graph[b].push([a, 1 / value]); // Reverse edge for division
    }
    
    // Define DFS function to find the result of each query
    const dfs = (start, end, visited) => {
        if (!(start in graph) || !(end in graph)) return -1; // Variable not found
        if (start === end) return 1; // Same variable
        visited.add(start);
        for (const [neighbor, value] of graph[start]) {
            if (!visited.has(neighbor)) {
                const result = dfs(neighbor, end, visited);
                if (result !== -1) return value * result;
            }
        }
        return -1; // Path not found
    };
    
    // Iterate through queries and find the result using DFS
    const results = [];
    for (const [x, y] of queries) {
        results.push(dfs(x, y, new Set()));
    }
    
    return results;
};
