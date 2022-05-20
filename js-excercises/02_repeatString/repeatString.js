const repeatString = function(x, num) {
    if(num < 0) return "ERROR"
    
    let newString = ""

    while(num > 0 ){
        newString += x

        num--
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;