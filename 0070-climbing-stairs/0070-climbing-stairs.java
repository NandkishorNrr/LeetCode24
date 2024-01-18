class Solution {
    public int climbStairs(int n) {
        if (n == 1) {
            return 1;
        } else if (n == 2) {
            return 2;
        }

        // Initialize an array to store the number of ways for each step
        int[] ways = new int[n + 1];

        // Base cases
        ways[1] = 1;
        ways[2] = 2;

        // Calculate the number of ways for each step
        for (int i = 3; i <= n; i++) {
            ways[i] = ways[i - 1] + ways[i - 2];
        }

        return ways[n];
    }
}
