class Solution {
    public int numberOfArithmeticSlices(int[] nums) {
        int n = nums.length;
        int result = 0;
        Map<Integer, Integer>[] dp = new Map[n];

        for (int i = 0; i < n; i++) {
            dp[i] = new HashMap<>();
            for (int j = 0; j < i; j++) {
                long diff = (long) nums[i] - (long) nums[j];
                if (diff <= Integer.MIN_VALUE || diff > Integer.MAX_VALUE) {
                    continue;  // Avoid overflow issues
                }
                int diffInt = (int) diff;
                int count_j_diff = dp[j].getOrDefault(diffInt, 0);
                result += count_j_diff;
                dp[i].put(diffInt, dp[i].getOrDefault(diffInt, 0) + count_j_diff + 1);
            }
        }

        return result;
    }
}