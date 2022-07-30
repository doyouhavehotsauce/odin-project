window.onload = function(){

    let library = [];
    let btn = document.getElementById('bookSubmit');
    let cardContainer = document.getElementById('wrap');
    let addBookBtn = document.getElementById('add-book');
    let grabWrap = document.querySelector('div.add-book-wrap');

    let selectedCard


    //done - get the values of the user input when submit click
    //create Add book button - on click form modal appears
    //ensure aria compliance on form & cards
    //done - create a book object from that data
    //done - store the book object in an array
    //done - print the array of books to the page
        //add toggleable feature to read/unread

    //if user deletes a book remove it from the array
        //add confirmation step feature
    
    //done - if user adds an book add to page without refreshing page



//creates book object
    function Book(title, author){
        this.title = title;
        this.author = author;
        // this.readStatus = readStatus;
        this.addToLibrary = function(){
            library.push(this);
        };

        this.addToLibrary();
        
        showBookForm();
        clearContainer();
        showBooks();

    }




//puts cards on page
    function showBooks(){
        for(book of library) {
            document.getElementById('wrap').innerHTML
            += '<article class="card">'+
            `<h3>${book.title}</h3>`+
            `<p>author: ${book.author} <br>`+
            `completed: <span class="deleteBook">delete</span>`+
            `</p>`+
            `</article>`;
        }
    }
   


    //Event Listners
    btn.addEventListener('click', btnHeard);
    function btnHeard(e){
        e.preventDefault();

        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        //let readStatus = document.getElementById('read').value

        let makeNewBook = new Book(title, author);

        return makeNewBook

       }

    cardContainer.addEventListener('click', e => {
        if(e.target.className === 'deleteBook'){
            deleteCard();
        }
    })
    
    addBookBtn.addEventListener('click', showBookForm)
    function showBookForm(){
        if(grabWrap.classList.contains('hide') ){
            grabWrap.classList.add('show');
            grabWrap.classList.remove('hide');
        } else {
            grabWrap.classList.add('hide');
            grabWrap.classList.remove('show');            
        }
    }
        








    //Helper Functions
    function clearContainer(){
        document.getElementById('wrap').innerHTML = "";
    }
    function deleteCard(){
        console.log('delete card func called')
    }




    
    } //close window on ready






