/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0]; // Initialize minPrice with the first price

    // Iterate through prices starting from the second day
    for (let i = 1; i < prices.length; i++) {
        // Update minPrice if we find a smaller price
        minPrice = Math.min(minPrice, prices[i]);

        // Calculate the profit if we sell at the current price
        const profit = prices[i] - minPrice;

        // Update maxProfit if the current profit is greater
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
};
