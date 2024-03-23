/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false; // If the matrix is empty, return false
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    let row = 0;
    let col = cols - 1; // Start from the top-right corner

    while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
            return true; // Found the target
        } else if (matrix[row][col] < target) {
            row++; // Move down (since the current element is smaller than the target)
        } else {
            col--; // Move left (since the current element is greater than the target)
        }
    }

    return false; // Target not found
};
