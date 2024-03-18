var nearestExit = function(maze, entrance) {
    const rows = maze.length;
    const cols = maze[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Possible movements: up, down, left, right
    
    const queue = []; // Queue for BFS
    queue.push([...entrance, 0]); // Add entrance position to queue along with distance
    
    // Mark entrance as visited
    maze[entrance[0]][entrance[1]] = '+';
    
    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();
        
        // Check if exit is found
        if ((x !== entrance[0] || y !== entrance[1]) && (x === 0 || x === rows - 1 || y === 0 || y === cols - 1)) {
            return steps;
        }
        
        // Explore neighbors
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            
            // Check if neighbor is within bounds and is open
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && maze[newX][newY] === '.') {
                maze[newX][newY] = '+'; // Mark neighbor as visited
                queue.push([newX, newY, steps + 1]); // Add neighbor to queue with increased distance
            }
        }
    }
    
    // If no exit is found
    return -1;
};
