var gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;
    const copyBoard = [];
    
    // Create a copy of the original board
    for (let i = 0; i < m; i++) {
        copyBoard.push([...board[i]]);
    }
    
    // Define directions for neighbors
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    
    // Helper function to count live neighbors
    const countLiveNeighbors = (row, col) => {
        let count = 0;
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && copyBoard[newRow][newCol] === 1) {
                count++;
            }
        }
        return count;
    };
    
    // Update cell states in the original board based on rules of Game of Life
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const liveNeighbors = countLiveNeighbors(i, j);
            if (copyBoard[i][j] === 1) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    board[i][j] = 0; // Cell dies
                }
            } else {
                if (liveNeighbors === 3) {
                    board[i][j] = 1; // Cell becomes alive
                }
            }
        }
    }
};
