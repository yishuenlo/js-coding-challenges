//https://www.codewars.com/kata/59df2f8f08c6cec835000012

//convert to string, Fred:Corwill = (Corwill, Fred)
//sort alphabetically

const s =
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

let names = s.toUpperCase().split(';');

let regex = /([A-Z]+):([A-Z]+)/gi;

names = names.map(name => name.replace(regex, '($2, $1)')).sort().join("");

console.log('names', names)

function meeting(s) {
  return s
    .toUpperCase()
    .split(";")
    .map((name) => name.replace(/([A-Z]+):([A-Z]+)/gi, "($2, $1)"))
    .sort()
    .join("");
}