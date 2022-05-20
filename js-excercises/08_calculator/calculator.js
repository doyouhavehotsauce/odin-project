const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
    let sum

    if(arr.length == 0){
        sum = 0;
    } else {
        sum = arr.reduce((acc, val) => acc += val )
    }
    return sum

};

const multiply = function(arr) {
    let sum = arr.reduce( (a,b) => a * b)
    
    return sum

};
// const power = (a, b) => Math.pow(a, b) 
const power = function(a, b) {
       return Math.pow(a, b)
};

const factorial = function(num) {
	let result = num

    if(num === 0 || num === 1){ return 1 }
    
    while (num > 1){
        num--
        result = result * num
    }
    return result
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