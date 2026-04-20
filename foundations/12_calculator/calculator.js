const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(numbers) {
	return numbers.reduce((sum, num) => sum + num, 0);
};

const multiply = function(numbers) {
	return numbers.reduce((product, num) => product * num, 1);
};

const power = function(number1, number2) {
	return number1 ** number2;
};

const factorial = function(number) {
	return number ? number * factorial(number - 1) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
