//https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

//convert an array of objects into string
//if more than 2 names, use '&' to separate last two names

//input = array of objects with name: personName
//output = string of names

const names = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];

//using reduce()
const list = (names) => {
  //reduce array to a single string
  return names.reduce((acc, cur, index, arr) => {
    if (index === 0) {
      //grab first name
      return cur.name;
    } else if (index === arr.length - 1) {
      //grab last name
      return `${acc} & ${cur.name}`;
    } else {
      //names in-between
      return `${acc}, ${cur.name}`;
    }
  }, "");
};

//using join()
function listArr(names) {
  //convert to array
  let nameArr = names.map((obj) => obj.name);

  //check how many names
  if (nameArr.length < 3) {
    //if less than 3, use '&' to separate
    return nameArr.join(" & ");
  } else {
    //if more than 3, slice out the all but last name, add '&, and attach last name
    return `${nameArr
      .slice(0, nameArr.length - 1)
      .join(", ")} & ${nameArr.slice(nameArr.length - 1)}`;
  }
}
