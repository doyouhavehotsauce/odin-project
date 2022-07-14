//Write a constructor for making “Book” objects. 
//We will revisit this in the project at the end of this lesson. 
//Your book objects should have the book’s title, author, the 
//number of pages, and whether or not you have read the book.
//Put a function into the constructor that can report the book info like so:
function BookDetails(title, author, pageNum, status){
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.status = status;
    this.cheer = function(){
        console.log('yeeah')
    }

    // info() {
    //     return `${this.title} by ${this.author}, ${this.pageNum} pages, ${this.status}, ${this.cheer}`
    // }
}

const theHobbit = new BookDetails('The Hobbit', 'JRR Tolkien', '295', false)

theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, false"


//Note: It is almost always best to return things rather than 
//putting console.log() directly into the function. In this case, 
//return the info string and log it after the function has been called:

console.log(theHobbit.info());




//Practice
function makeDogs(name, breed, isGoodBoy){
    this.name = name;
    this.breed = breed;
    this.isGoodBoy = isGoodBoy;
    this.speak = function(){
        console.log('wooof')
    }
}

const dog = new makeDogs('Tod', 'pitbull', true);
const dog2 = new makeDogs('Walter', 'pommerainiananan', false);

console.log(`my name is ${dog.name} and my friend is ${dog2.name}. it is ${dog2.isGoodBoy} that he is a good boy`)





function whosAGoodBoy(dog){
    return (dog.isGoodBoy ? 'yes he is' : 'nope')
}

whosAGoodBoy(dog2)
whosAGoodBoy(dog)







function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
      console.log(name)
    }
  }
  
  const player1 = new Player('steve', 'X')
  const player2 = new Player('also steve', 'O')
  player1.sayName() // logs 'steve'
  player2.sayName() // logs 'also steve'