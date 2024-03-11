var rotate = function(matrix) {
    const n = matrix.length;
    
    // Iterate through each layer
    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        const first = layer;
        const last = n - 1 - layer;
        
        // Iterate through each element in the current layer
        for (let i = first; i < last; i++) {
            const offset = i - first;
            const top = matrix[first][i];
            
            // Top -> Right
            matrix[first][i] = matrix[last - offset][first];
            
            // Right -> Bottom
            matrix[last - offset][first] = matrix[last][last - offset];
            
            // Bottom -> Left
            matrix[last][last - offset] = matrix[i][last];
            
            // Left -> Top
            matrix[i][last] = top;
        }
    }
};
