//https://leetcode.com/problems/best-time-to-buy-and-sell-prices/

//an array of prices price
//can only execute once 
//find maximum profit

//input = array
//output = number

const prices = [2, 4, 1];

let buy = prices.indexOf(Math.min(...prices));
let sell = Math.max(...prices.slice(buy));

const maxProfit = (prices) => {
    if(prices.length < 2) return 0;
    const buy = prices.indexOf(Math.min(...prices));
    const sell = Math.max(...prices.slice(buy));
    return sell - prices[buy];
}


console.log('buy', buy);
console.log('sell', sell);