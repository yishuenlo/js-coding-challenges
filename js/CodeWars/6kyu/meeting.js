//https://www.codewars.com/kata/59df2f8f08c6cec835000012

//convert to string, Fred:Corwill = (Corwill, Fred)
//sort alphabetically

//input = string
//output = string

const s =
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

function meeting(s) {
  return s
    .toUpperCase() //convert to uppercase
    .split(";") //conver to array
    .map((name) => name.replace(/([A-Z]+):([A-Z]+)/gi, "($2, $1)")) //swap first and last names
    .sort() //sort
    .join(""); //convert to string
}