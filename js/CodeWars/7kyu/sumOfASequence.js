//https://www.codewars.com/kata/586f6741c66d18c22800010a

//accepts 3 numbers, begin, end and step
//if begin is larger than end, return 0
//add numbers together, inclusive of begin and end numbers

//input = 3 numbers
//output = one number

const sequenceSum = (begin, end, step) => {
  //establish end condition
  if (begin > end) return 0;

  //recursive call
  return begin + sequenceSum(begin + step, end, step);
};