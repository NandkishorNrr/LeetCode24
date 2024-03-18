var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Possible movements: up, down, left, right
    
    let freshOranges = 0; // Counter for fresh oranges
    const queue = []; // Queue for BFS
    
    // Add all rotten oranges to the queue and count fresh oranges
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]); // [row, col, time]
            } else if (grid[i][j] === 1) {
                freshOranges++;
            }
        }
    }
    
    let minutes = 0; // Time taken for all oranges to become rotten
    
    while (queue.length > 0) {
        const [x, y, time] = queue.shift();
        minutes = Math.max(minutes, time); // Update time
        
        // Explore neighbors
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            
            // Check if neighbor is within bounds and is a fresh orange
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] === 1) {
                grid[newX][newY] = 2; // Mark the orange as rotten
                queue.push([newX, newY, time + 1]); // Add the rotten orange to the queue
                freshOranges--; // Decrement the count of fresh oranges
            }
        }
    }
    
    // If there are still fresh oranges left, return -1
    return freshOranges === 0 ? minutes : -1;
};
