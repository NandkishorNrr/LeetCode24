/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    
    // Initialize Pascal's triangle with the first row
    const triangle = [[1]];
    
    // Generate subsequent rows
    for (let i = 1; i < numRows; i++) {
        const row = [1]; // First element of each row is always 1
        
        // Generate elements between the first and last element of the row
        for (let j = 1; j < i; j++) {
            // Each element (except the first and last) is the sum of the two elements above it in the previous row
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
        
        row.push(1); // Last element of each row is always 1
        triangle.push(row);
    }
    
    return triangle;
};
