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
  if (count <= 0) return 0;

  let cost = (ticket * perc);
  return cost + calcPlanB(ticket * perc, perc, count - 1);
};

//while planB is greater than planA, keep incrementing count

//giftcard breakeven point count
let cardBreakEven = Math.ceil(card / ticket);

//based on cardBreakeven, how many tickets can planB get
let breakevenCount = Math.ceil(
  (Math.ceil(calcPlanB(ticket, perc, cardBreakEven)) + card) / ticket
);

let planA = ticket * breakevenCount;
let planB = calcPlanB(ticket, perc, breakevenCount) + card;

while (planA < planB) {
  breakevenCount++;
  planA = ticket * breakevenCount;
  planB = calcPlanB(ticket, perc, breakevenCount) + card;
}

console.log("breakevenCount", breakevenCount);

function movie(card, ticket, perc) {
  //giftcard breakeven point count
  let cardBreakEven = Math.ceil(card / ticket);

  //based on cardBreakeven, how many tickets can planB get
  let breakevenCount = Math.ceil(
    (Math.ceil(calcPlanB(ticket, perc, cardBreakEven)) + card) / ticket
  );

  let planA = ticket * breakevenCount;
  let planB = calcPlanB(ticket, perc, breakevenCount) + card;

  while (planA < planB) {
    breakevenCount++;
    planA = ticket * breakevenCount;
    planB = calcPlanB(ticket, perc, breakevenCount) + card;
  }

  return breakevenCount;
}
