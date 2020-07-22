//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

//an array of prices price
//can only execute once per day
//find maximum profit

const prices = [7, 1, 5, 3, 6, 4];

let maxProf = 0;

for(let i = 0; i < prices.length; i++){
    if(prices[i + 1] > prices[i]) maxProf += prices[i + 1] - prices[i];
}

let profit = prices.reduce((profit, cur, index) => {
    if(prices[index + 1] > cur) profit += prices[index + 1] - cur;
    return profit;
}, 0)

console.log(maxProfit);

const maxProfit = (prices) => {
  return prices.reduce((profit, cur, index) => {
    if (prices[index + 1] > cur) profit += prices[index + 1] - cur;
    return profit;
  }, 0);
};