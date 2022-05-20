let arr = [1,2,3,4,'tom'];



const removeFromArray = function(x, num) {
    for(let arg of x){
        console.log(arg)
        if(num == arg){
            console.log('this checks out')
            arr.splice(num)
        }
    }
};

removeFromArray(arr)
// Do not edit below this line
module.exports = removeFromArray;