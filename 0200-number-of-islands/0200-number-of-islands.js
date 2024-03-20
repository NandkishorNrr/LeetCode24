/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    
    const numRows = grid.length;
    const numCols = grid[0].length;
    let count = 0;
    
    function dfs(row, col) {
        // Base case: check if out of bounds or cell is not part of an island
        if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] === '0') {
            return;
        }
        
        // Mark the current cell as visited by changing it to '0'
        grid[row][col] = '0';
        
        // Explore neighboring cells in all directions
        dfs(row + 1, col); // down
        dfs(row - 1, col); // up
        dfs(row, col + 1); // right
        dfs(row, col - 1); // left
    }
    
    // Iterate through each cell in the grid
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            // If the cell is part of an island, perform DFS to explore the island
            if (grid[i][j] === '1') {
                dfs(i, j);
                count++;
            }
        }
    }
    
    return count;
};
