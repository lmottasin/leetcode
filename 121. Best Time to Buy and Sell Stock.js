/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let buy_price_index = 0
    let sell_price_index = 1
    let max_profit = 0

    while( sell_price_index < prices.length){
        if(prices[buy_price_index] < prices[sell_price_index]){
            let current_profit = prices[sell_price_index] - prices[buy_price_index]
            max_profit = Math.max(current_profit, max_profit)
        }
        else{
            buy_price_index = sell_price_index
        }

        sell_price_index++
    }

    return max_profit
    
};