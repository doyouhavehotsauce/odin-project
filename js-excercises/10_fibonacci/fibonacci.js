const fibonacci = function(num) {
    let oops = 'OOPS'
    let realNum = parseInt(num, 10)
   
    if(realNum < 0){
        return oops
    }

    for( let i = 0; i <= num-1; i++){
        fibo = prevNum += i
        console.log(`prevNum = ${prevNum}, i =${i}`)   
    }
    //return fibo


    const temp = b; b = a + b; a = temp;

};

// Do not edit below this line
module.exports = fibonacci;