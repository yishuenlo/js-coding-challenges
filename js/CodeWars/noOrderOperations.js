//https://www.codewars.com/kata/5e9df3a0a758c80033cefca1/train/javascript

//input = string
//output = number or null

//operation allowed
//+, -, * , /, ^, %

let input = "6 9* 2+6 /  0"; //1

//clean up input
input = input
  .replace(/\s/g, "") //clean up space
  .replace(/([^0-9])/gi, " $1 ") //add space around operations
  .split(" "); //convert to array

console.log(input);

let result = parseInt(input[0]);

console.log(result);

for (let i = 1; i < input.length; i++) {
  switch (input[i]) {
    case "+":
      result += parseInt(input[i + 1]);
      break;
    case "-":
      result -= parseInt(input[i + 1]);
      break;
    case "*":
      result *= parseInt(input[i + 1]);
      break;
    case "/":
      result = Math.floor(result / parseInt(input[i + 1]));
      break;
    case "^":
      result = result ** parseInt(input[i + 1]);
      break;
    case "%":
      if (input[i + 1] == 0) result = 0;
      result %= parseInt(input[i + 1]);
      break;
  }
}

console.log("result", result);

function noOrder(input) {
  //clean up input
  input = input
    .replace(/\s/g, "") //clean up space
    .replace(/([^0-9])/gi, " $1 ") //add space around operations
    .split(" "); //convert to array

  let result = parseInt(input[0]);

  for (let i = 1; i < input.length; i++) {
    switch (input[i]) {
      case "+":
        result += parseInt(input[i + 1]);
        break;
      case "-":
        result -= parseInt(input[i + 1]);
        break;
      case "*":
        result *= parseInt(input[i + 1]);
        break;
      case "/":
        if (input[i + 1] == 0) return null;
        result = Math.floor(result / parseInt(input[i + 1]));
        break;
      case "^":
        result = result ** parseInt(input[i + 1]);
        break;
      case "%":
        if (input[i + 1] == 0) return null;
        result %= parseInt(input[i + 1]);
        break;
    }
  }

  return result;
}
