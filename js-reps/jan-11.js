const stringArray = 'SOMESTRING';

function capIt(){
    let string = stringArray.toLocaleLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
   
    //console.log(string);
}

const aString = 'florence';

function lastLetter(){
    // make sure string is all lowercase
    let lowerCase = aString.toLowerCase();
    // grab the last letter of the string
    let lastLetter = lowerCase.charAt(aString.length-1);
    // grab the front of the string
    let frontString = aString.slice(lastLetter)
    let newString = frontString + lastLetter.toUpperCase();
    //return the new string with the last letter capitalized
    return newString

    //console.log(newString);

    //return string.charAt(lastLetter).toUpperCase();
    
    //make that letter capitalized and paste back on the end of the string
    // return length + lastLetter.toUpperCase();
}




// Supped up Fizzbuzz!!!!
// +----------------------------------------+
// function runIt(){
//     // do prompt and ask for Number
//     let question = prompt('give me a number, any number')
//     // When a user inputs a number
//     // turn that string into a Number
//     let num = parseInt(question)
//     // Loop from 1 to the entered number
//     for(var i = 0; i <= num; i++){
//     // If the current number is divisible by 3 and 5 then print "FizzBuzz"
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log('FizzBuzz')
//     }else if(i % 3 == 0){
//     // If the current number is divisible by 3 then print "Fizz"
//     console.log('Fizz');
//     }else if(i % 5 == 0){
//     // If the current number is divisible by 5 then print "Buzz"
//     console.log('Buzz')
//     }else{
//     // Otherwise print the current number
//     console.log(i)
//     }
// }
// }









// Working with objects
var animals = [
    {name: 'Tom', species: 'fish'},
    {name: 'Alex', species: 'dog'},
    {name: 'Leo', species: 'dog'},
    {name: 'Alex', species: 'fish'},
    {name: 'Stu', species: 'aligator'},
    {name: 'Moe', species: 'cat'},
    {name: 'Moe', species: 'horse'},
    {name: 'Jeff', species: 'dog'},
    {name: 'Rick', species: 'cat'},
]



let names = animals.map( name => `${name.name} is a ${name.species}`)

// console.log(names)
// let newList = animals.filter( animal => animal.species.length > 3)
// let animalType = animals.filter( type => type.species === 'dog' )
// let findTheMatch = animals.filter( name => name.name === 'Rick')
// let lastOne = animals.filter( name => name.slice === -1)


// console.log(newList)

// console.log(lastOne)






// Playing with loops
const pets = ['Tom', 'Jerry', 'Sam', 'Bert'];
const pageOutput = document.querySelector('#output');
let myPets = 'My pets are called ';

//for of loop
for(const pet of pets){
    //console.log(pet);
    //pageOutput.textContent += `${pets}`;

}


for(let i = 0; i < pets.length; i++){
    //console.log(pets[i]);
    if(i === pets.length - 1){
        myPets = `${myPets}and ${pets[i]}.`
        pageOutput.textContent = myPets;
    } else {
        myPets = `${myPets}${pets[i]}, `
        pageOutput.textContent = myPets;
    }
}
console.log(myPets)



let foods = [
    'tomatos',
    'carrots',
    'ham sammies',
    'candy'
];


function aboutMe(x){
    for (let food of x.length-1){
        console.log(`I like to eat ${food}`);
    }
}


function aboutMe(x){
    for(let i = 0; i <= x.length-2; i ++){
        console.log(`I like to eat ${x}\n`);
    }
}

let x = [
    'chips',
    'coke'
];

let x = ['corn', 'pizza'];



//get array from dom
const logoArr = ['rocket', 'boat', 'gears', 'pencils'];
//this represents the length of the array
let testNum = 3;



//create a function to put icons into dom 
//based on number found in array
function featureTest(testNum){
    for(let i = 0; i < testNum; i++ ){
            console.log('icon is '+logoArr[i])
    }
}