//https://www.codewars.com/kata/593c0ebf8b90525a62000221/train/javascript

//categorize and group grocery items from a string list
//sort items alphabetically in each group

//input: string
//output: string

const input =
  "fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange";

//output
//"fruit:apple,banana,orange\nmeat:\nother:juice,sardines\nvegetable:carrot"

function solution(input) {
  //object to store items
  const grocer = {
    fruit: [],
    meat: [],
    other: [],
    vegetable: [],
  };

  //loop through each item and sort into object
  input.split(",").forEach((item) => {
    let key = item.split("_")[0];
    item.includes(key) && grocer[key]
      ? grocer[key].push(item.split("_")[1])
      : grocer.other.push(item.split("_")[1]);
  });

  //convert into string
  let result = "";
  for (let key in grocer) {
    result += `${key}:${grocer[key].sort().join(",")}`;
    if (key !== "vegetable") result += "\n";
  }

  return result;
}
