function exist(board, word) {
    const numRows = board.length;
    const numCols = board[0].length;
    
    const backtrack = (row, col, index) => {
        if (index === word.length) {
            return true;
        }
        
        if (row < 0 || row >= numRows || col < 0 || col >= numCols || board[row][col] !== word[index]) {
            return false;
        }
        
        const temp = board[row][col];
        board[row][col] = '#'; // Mark as visited
        
        const found = backtrack(row + 1, col, index + 1) ||
                      backtrack(row - 1, col, index + 1) ||
                      backtrack(row, col + 1, index + 1) ||
                      backtrack(row, col - 1, index + 1);
        
        board[row][col] = temp; // Restore the original character
        return found;
    };
    
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (backtrack(row, col, 0)) {
                return true;
            }
        }
    }
    
    return false;
}
