/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 0) return 0; // If there are no points, return 0
    
    // Sort points based on end positions
    points.sort((a, b) => a[1] - b[1]);
    
    let arrows = 1; // Initialize the number of arrows to 1
    let prevEnd = points[0][1]; // Initialize the end position of the first balloon
    
    // Iterate through points
    for (let i = 1; i < points.length; i++) {
        const point = points[i];
        // If the current balloon's start position is beyond the previous arrow's end position
        // We need to use a new arrow
        if (point[0] > prevEnd) {
            arrows++; // Increment the number of arrows
            prevEnd = point[1]; // Update the end position of the arrow
        }
    }
    
    return arrows;
};
