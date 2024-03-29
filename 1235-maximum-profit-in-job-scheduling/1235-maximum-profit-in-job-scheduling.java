public class Solution {
    public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
        int n = startTime.length;
        int[][] jobs = new int[n][3];

        for (int i = 0; i < n; i++) {
            jobs[i] = new int[]{startTime[i], endTime[i], profit[i]};
        }

        Arrays.sort(jobs, Comparator.comparingInt(a -> a[1])); // Sort jobs by end time

        int[] dp = new int[n];
        dp[0] = jobs[0][2];

        for (int i = 1; i < n; i++) {
            int currentProfit = jobs[i][2];

            // Binary search to find the latest non-overlapping job
            int latestNonOverlap = binarySearch(jobs, i);

            if (latestNonOverlap != -1) {
                currentProfit += dp[latestNonOverlap];
            }

            dp[i] = Math.max(currentProfit, dp[i - 1]);
        }

        return dp[n - 1];
    }

    private int binarySearch(int[][] jobs, int currentIndex) {
        int low = 0, high = currentIndex - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (jobs[mid][1] <= jobs[currentIndex][0]) {
                if (jobs[mid + 1][1] <= jobs[currentIndex][0]) {
                    low = mid + 1;
                } else {
                    return mid;
                }
            } else {
                high = mid - 1;
            }
        }

        return -1;
    }
}