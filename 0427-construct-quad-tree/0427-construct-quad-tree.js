function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
}

var construct = function(grid) {
    const n = grid.length;
    
    // Helper function to check if all values in a quadrant are the same
    const allSame = (row, col, size) => {
        const val = grid[row][col];
        for (let i = row; i < row + size; i++) {
            for (let j = col; j < col + size; j++) {
                if (grid[i][j] !== val) {
                    return false;
                }
            }
        }
        return true;
    };
    
    // Helper function to construct the quadtree
    const build = (row, col, size) => {
        if (allSame(row, col, size)) {
            return new Node(grid[row][col], true, null, null, null, null);
        } else {
            const half = size / 2;
            return new Node(
                0,
                false,
                build(row, col, half),
                build(row, col + half, half),
                build(row + half, col, half),
                build(row + half, col + half, half)
            );
        }
    };
    
    return build(0, 0, n);
};
