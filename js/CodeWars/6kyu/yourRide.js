//https://www.codewars.com/kata/55491e9e50f2fc92f3000074

let letter = "A";

let group = "COMETQ";
let comet = "HVNGAT";

let rideNum = function(str){
  return str.split('').reduce((a, b) => a * (b.charCodeAt() - 64), 1) % 47;
}

function ride(group, comet) {
    return (rideNum(group) === rideNum(comet)) ? 'GO' : 'STAY';
}