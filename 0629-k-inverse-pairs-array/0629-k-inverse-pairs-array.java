class Solution {
    public int kInversePairs(int n, int k) {
        int MOD = 1000000007;
        int[][] dp = new int[n + 1][k + 1];
        
        // Base case
        dp[0][0] = 1;
        
        for (int i = 1; i <= n; i++) {
            dp[i][0] = 1;  // There is only one array with 0 inverse pairs (sorted array)
            for (int j = 1; j <= k; j++) {
                dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % MOD;
                if (j >= i) {
                    dp[i][j] = (dp[i][j] - dp[i - 1][j - i] + MOD) % MOD;
                }
            }
        }
        
        return dp[n][k];
    }
    
    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Example usage
        System.out.println(solution.kInversePairs(3, 0));  // Output: 1
        System.out.println(solution.kInversePairs(3, 1));  // Output: 2
    }
}
