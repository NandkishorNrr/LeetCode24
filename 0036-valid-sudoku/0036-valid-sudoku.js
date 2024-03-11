var isValidSudoku = function(board) {
    const seen = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const digit = board[i][j];
            if (digit !== '.') {
                const rowKey = `${digit} in row ${i}`;
                const colKey = `${digit} in col ${j}`;
                const boxKey = `${digit} in box ${Math.floor(i / 3)}-${Math.floor(j / 3)}`;
                
                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                    return false;
                }
                
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }
    }

    return true;
};
