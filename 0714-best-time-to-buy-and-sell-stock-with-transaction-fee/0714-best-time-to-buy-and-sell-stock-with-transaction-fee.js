var maxProfit = function(prices, fee) {
    const n = prices.length;
    if (n <= 1) return 0;

    // Define two arrays to keep track of the maximum profit with and without a stock on hand
    const withStock = new Array(n).fill(0);
    const withoutStock = new Array(n).fill(0);

    // Set the initial value for withStock array
    withStock[0] = -prices[0];

    for (let i = 1; i < n; i++) {
        // Update the maximum profit with a stock on hand at index i
        withStock[i] = Math.max(withStock[i - 1], withoutStock[i - 1] - prices[i]);

        // Update the maximum profit without a stock on hand at index i
        withoutStock[i] = Math.max(withoutStock[i - 1], withStock[i - 1] + prices[i] - fee);
    }

    // The final maximum profit is the maximum of having a stock or not having a stock on the last day
    return Math.max(withStock[n - 1], withoutStock[n - 1]);
};
