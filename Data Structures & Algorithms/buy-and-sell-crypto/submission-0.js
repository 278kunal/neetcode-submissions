class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * [10,8,7,5,2,1,2,3,10,1,2,3,11,1,1]
     */
    maxProfit(prices) {
        let globalProfit = 0;
        let windowStartPrice = prices[0];

        for (let i = 1; i < prices.length; i++) {
            let currentPrice = prices[i];
            let localProfit = currentPrice - windowStartPrice;
            if (currentPrice < windowStartPrice) {
                windowStartPrice = currentPrice
            } else if (localProfit > globalProfit) {
                globalProfit = localProfit;
            }
        }

        return globalProfit;
    }
}
