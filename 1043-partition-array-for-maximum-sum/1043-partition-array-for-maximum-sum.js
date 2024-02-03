var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const maxValues = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let maxVal = 0;
        for (let j = 1; j <= k && i - j + 1 >= 0; j++) {
            maxVal = Math.max(maxVal, arr[i - j + 1]);
            const currentSum = (i >= j ? maxValues[i - j] : 0) + maxVal * j;
            maxValues[i] = Math.max(maxValues[i], currentSum);
        }
    }

    return maxValues[n - 1];
};