import java.util.HashMap;
import java.util.Map;

class Solution {
    public int numSubmatrixSumTarget(int[][] matrix, int target) {
        int m = matrix.length;
        int n = matrix[0].length;
        int[][] prefixSum = new int[m + 1][n + 1];

        // Compute the prefix sum matrix
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                prefixSum[i][j] = matrix[i - 1][j - 1] + prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1];
            }
        }

        int count = 0;

        // Iterate over all possible pairs of rows
        for (int i = 1; i <= m; i++) {
            for (int j = i; j <= m; j++) {
                // Map to store the frequency of prefix sums
                Map<Integer, Integer> sumCount = new HashMap<>();
                sumCount.put(0, 1);

                // Iterate over all possible pairs of columns
                for (int k = 1; k <= n; k++) {
                    int currentSum = prefixSum[j][k] - prefixSum[i - 1][k];
                    int complement = currentSum - target;

                    // Check if complement exists in the map
                    count += sumCount.getOrDefault(complement, 0);

                    // Update the map with the current prefix sum
                    sumCount.put(currentSum, sumCount.getOrDefault(currentSum, 0) + 1);
                }
            }
        }

        return count;
    }
}
