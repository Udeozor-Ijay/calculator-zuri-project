const operator = prompt("Enter operator: +, -, *, or /");

const number1 = parseInt(prompt("Enter First number: "));
const number2 = parseInt(prompt("Enter Second Number: "));

let result;

if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "*") {
  result = number1 * number2;
} else if (operator == "/") {
  result = number1 / number2;
} else {
  document.write("invalid function");
}

alert(result);
//console.log('${number1} ${operator} ${number2} = ${result}');
