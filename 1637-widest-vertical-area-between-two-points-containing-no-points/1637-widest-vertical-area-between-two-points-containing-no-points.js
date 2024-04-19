/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    // Sort the points based on x-coordinate
    points.sort((a, b) => a[0] - b[0]);
    
    // Initialize max width
    let maxWidth = 0;
    
    // Iterate through sorted points to find maximum width
    for (let i = 1; i < points.length; i++) {
        // Calculate the difference between consecutive x-coordinates
        const width = points[i][0] - points[i - 1][0];
        // Update maxWidth if the current width is greater
        if (width > maxWidth) {
            maxWidth = width;
        }
    }
    
    return maxWidth;
};
