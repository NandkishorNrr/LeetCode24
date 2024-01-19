class Solution {
    public int minFallingPathSum(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return 0;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;

        // Create a copy of the matrix to store intermediate results
        int[][] dp = new int[rows][cols];

        // Copy the first row from the original matrix to the dp matrix
        System.arraycopy(matrix[0], 0, dp[0], 0, cols);

        // Iterate through the rows starting from the second row
        for (int i = 1; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                // Calculate the minimum falling path sum for each element
                dp[i][j] = matrix[i][j] + Math.min(
                        dp[i - 1][Math.max(0, j - 1)],
                        Math.min(dp[i - 1][j], dp[i - 1][Math.min(cols - 1, j + 1)])
                );
            }
        }

        // Find the minimum sum in the last row
        int minSum = Integer.MAX_VALUE;
        for (int value : dp[rows - 1]) {
            minSum = Math.min(minSum, value);
        }

        return minSum;
    }
}
