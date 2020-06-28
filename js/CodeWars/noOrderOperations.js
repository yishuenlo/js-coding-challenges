//https://www.codewars.com/kata/5e9df3a0a758c80033cefca1/train/javascript

//input = string
//output = number or null

//operation allowed
//+, -, * , /, ^, %

let input = "6 9* 2+6 /  0"; //1

//final answer
function noOrder(input) {
  //clean up input
  input = input
    .replace(/\s/g, "") //clean up space
    .replace(/([^0-9])/gi, " $1 ") //add space around operations
    .split(" "); //convert to array

  //store result
  let result = parseInt(input[0]);

  //loop through input and look for operations
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
        if (input[i + 1] == 0) return null; //break out of function
        result = Math.floor(result / parseInt(input[i + 1]));
        break;
      case "^":
        result = result ** parseInt(input[i + 1]);
        break;
      case "%":
        if (input[i + 1] == 0) return null; //break out of function
        result %= parseInt(input[i + 1]);
        break;
    }
  }

  return result;
}
