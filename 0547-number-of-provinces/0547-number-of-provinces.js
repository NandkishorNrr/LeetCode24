/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length; // Number of cities (provinces)
    const visited = new Set(); // Set to keep track of visited cities
    let provinces = 0; // Initialize the number of provinces
    
    // Perform DFS from each unvisited city
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i);
            provinces++; // Increment the number of provinces after DFS
        }
    }
    
    return provinces;

    // DFS function to visit all connected cities (provinces)
    function dfs(city) {
        visited.add(city); // Mark the current city as visited
        for (let j = 0; j < n; j++) {
            // If there is a connection from the current city to another city and the other city has not been visited
            if (isConnected[city][j] === 1 && !visited.has(j)) {
                dfs(j); // Perform DFS from the other city
            }
        }
    }
};
