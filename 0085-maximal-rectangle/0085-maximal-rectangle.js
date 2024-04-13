var maximalRectangle = function(matrix) {
    if (!matrix || matrix.length === 0) return 0;

    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const heights = new Array(numCols).fill(0);
    let maxArea = 0;

    const calculateMaxArea = (heights) => {
        const stack = [];
        let maxArea = 0;
        
        for (let i = 0; i <= heights.length; i++) {
            while (stack.length !== 0 && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
                const height = heights[stack.pop()];
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        
        return maxArea;
    };

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (matrix[i][j] === '1') {
                heights[j]++;
            } else {
                heights[j] = 0;
            }
        }
        maxArea = Math.max(maxArea, calculateMaxArea(heights));
    }

    return maxArea;
};
