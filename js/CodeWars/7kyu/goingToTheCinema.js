//https://www.codewars.com/kata/562f91ff6a8b77dfe900006e

//choose two system
//A: buy ticket at $15 every time
//B: buy $500 gift card, and get 10% off of the price he paid for the previous one - aka, ticket gets cheaper

//how many times John has to go the theater for B to make sense? 

//input = card(gift card price), ticket(original price), perc(discount)
//output = number

//example of going 3 times
// System A : 15 * 3 = 45
// System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)

//$500 gift card = 34 times of $15

const card = 100;
const ticket = 10;
const perc = 0.95;

const calcPlanB = (ticket, perc, count) => {
    if(count === 0) return 0;

    let cost = ticket * perc;
    return cost + calcPlanB(ticket * perc, perc, count - 1);
}

//while planB is greater than planA, keep incrementing count

//start at breakeven point
let breakeven = Math.ceil(card / ticket);

let planA = (breakeven) * ticket;
let planB = calcPlanB(ticket, perc, breakeven) + card;

let extra = calcPlanB(ticket, perc, breakeven) / ticket;



console.log('planA', planA)
console.log('planB', planB)


console.log('breakeven', breakeven);

function movie(card, ticket, perc) {
    let breakeven = Math.ceil(card / ticket);
    return Math.ceil(calcPlanB(ticket, perc, breakeven) / ticket + breakeven);
};