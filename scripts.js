var Plus = function () {
  let num1 = prompt("Please enter the first number");
  let num2 = prompt("Please enter the second number");
  var value = parseInt(num1, 10) + parseInt(num2);
  alert("The value is " + value);
};

var Minus = function () {
  let num1 = prompt("Please enter the first number");
  let num2 = prompt("Please enter the second number");
  var value = parseInt(num1, 10) - parseInt(num2);
  alert("The value is " + value);
};

var Division = function () {
  let num1 = prompt("Please enter the first number");
  let num2 = prompt("Please enter the second number");
  var value = parseInt(num1, 10) / parseInt(num2);
  alert("The value is " + value);
};

var Multiplication = function () {
  let num1 = prompt("Please enter the first number");
  let num2 = prompt("Please enter the second number");
  var value = parseInt(num1, 10) * parseInt(num2);
  alert("The value is " + value);
};

var Operation = prompt("+,-,/,*");

if (Operation == "+") {
  Plus();
} else if (Operation == "-") {
  Minus();
} else if (Operation == "/") {
  Division();
} else if (Operation == "*") {
  Multiplication();
} else {
  alert("Invalid Operator");
}
