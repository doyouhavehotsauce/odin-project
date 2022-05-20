const books = [
    {
    title: 'Book',
    author: 'Name'
    },
    {
    title: 'Book2',
    author: 'Name2'
    }
]

const getTheTitles = function(books) {

   const bookTitles = books.map(book => book.title)
       console.log(bookTitles);
   
};

// Do not edit below this line
//module.exports = getTheTitles;