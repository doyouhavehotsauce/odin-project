const findTheOldest = function() {
    //go through Array calculate the age of the person
    let ageOfPerson = people
                        .map(age => age.yearOfDeath - age.yearOfBirth)
                        .reduce((preVal, currVal) =>  Math.max(preVal, currVal))
    console.log(ageOfPerson);
    //compare all ages in the array

    //return the greatest age

};

// Do not edit below this line
module.exports = findTheOldest;