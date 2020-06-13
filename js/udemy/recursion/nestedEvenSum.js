//find even numbers within a nested object, and add all even numbers together
//object could have multiple nested and levels of objects

//input = object
//output = number

var obj = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

//check to see if typeof value is number
//if typeof is number, check to see if it's even

function nestedEvenSum(obj, sum = 0) {
  //loop through obj
  for (let key in obj) {
    //if value is still an obj, recrusively add return value to sum
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);

      //if it's an even number, add to sum
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
}
