function solveNQueens(n) {
    const result = [];
    
    // Helper function to check if a queen can be placed at a given position
    const isValid = (board, row, col) => {
        // Check if there's a queen in the same column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        
        // Check upper-left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        
        // Check upper-right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        
        return true;
    };
    
    // Helper function to backtrack and find solutions
    const backtrack = (board, row) => {
        // Base case: if we reach the last row, add the current board configuration to result
        if (row === n) {
            result.push([...board]);
            return;
        }
        
        // Iterate through each column in the current row
        for (let col = 0; col < n; col++) {
            // Check if placing a queen at this position is valid
            if (isValid(board, row, col)) {
                // Place the queen at this position
                board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);
                // Recursively backtrack with the updated board and move to the next row
                backtrack(board, row + 1);
                // Remove the queen at this position for backtracking
                board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1);
            }
        }
    };
    
    // Initialize an empty board filled with '.' characters
    const board = Array.from({ length: n }, () => '.'.repeat(n));
    // Start backtracking with the initial board and the first row
    backtrack(board, 0);
    
    return result;
}


