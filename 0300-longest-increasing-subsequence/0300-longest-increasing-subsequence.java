class Solution {
    public int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int n = nums.length;
        int[] dp = new int[n];
        int len = 1;
        dp[0] = nums[0];

        for (int i = 1; i < n; i++) {
            if (nums[i] > dp[len - 1]) {
                dp[len] = nums[i];
                len++;
            } else {
                int index = binarySearch(dp, 0, len - 1, nums[i]);
                dp[index] = nums[i];
            }
        }

        return len;
    }

    private static int binarySearch(int[] dp, int left, int right, int target) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (dp[mid] == target) {
                return mid;
            } else if (dp[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
}