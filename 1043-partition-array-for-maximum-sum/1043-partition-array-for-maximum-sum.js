var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const dp = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let maxVal = 0;
        for (let j = 1; j <= k && i - j + 1 >= 0; j++) {
            maxVal = Math.max(maxVal, arr[i - j + 1]);
            dp[i] = Math.max(dp[i], (i >= j ? dp[i - j] : 0) + maxVal * j);
        }
    }

    return dp[n - 1];
};