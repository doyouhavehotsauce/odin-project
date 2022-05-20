const palindromes = function(string) {

    // let reverseIt = phrase.split('').reverse().join('').toString()
    // console.log(typeof reverseIt)
    // return reverseIt

   let processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    console.log(processedString)
    
    return (
        processedString.split("").reverse().join("") == processedString
    );
};

// Do not edit below this line
module.exports = palindromes;