//PUNCH LIST
//ensure aria compliance on form & cards

//clean up form validation

//add toggleable feature to read/unread





    //Current focus: getting the checkbox to toggle the read status


window.onload = function(){

    let library = [];
    let submitNewBookBtn = document.getElementById('bookSubmit');
    let cardContainer = document.getElementById('wrap');
    let addBookBtn = document.getElementById('add-book');
    let grabWrap = document.querySelector('div.add-book-wrap');



    


//creates book object
    function Book(title, author, readStatus){
        this.title = title;
        this.author = author;
        this.readStatus = false;
        this.addToLibrary = function(){
            library.push(this);
        };


        console.log(`new book title is ${this.title} and read status is ${this.readStatus}`)

        this.addToLibrary();
        library.forEach(book => console.log(book))
            
        
        showBookForm();
        clearContainer();
        showBooks();

        return Book

    }




//puts cards on page
    function showBooks(){
        let i = 0;
        for(book of library) {
            document.getElementById('wrap').innerHTML
            += `<article class="card" data-id="${i}">`+
            `<h3>${book.title}</h3>`+
            `<p>author: ${book.author} </p>`+
            `<p>completed: <input type="checkbox" class="unread" ></p>`+
            `<button class="deleteBook">delete</button>`+
            `</article>`;

            i++
            if(`${book.readStatus}` == true){
                document.querySelector('checkbox').checked = true
            }
        }
        
    }
   


    //Event Listners
    submitNewBookBtn.addEventListener('click', (e) => {


        let title = document.getElementById('title');
        let author = document.getElementById('author');
        let titleError = document.querySelector('#title-error')
        let authorError = document.querySelector('#author-error')
        
        title.classList.remove('input-error')
        author.classList.remove('input-error')
        titleError.innerHTML = ''
        authorError.innerHTML = ''


        if(title.value == '' || title.value == null && author.value == '' || author.value == null){
            console.log('full check ran')

            titleError.innerHTML = '*Please add a title'
            authorError.innerHTML = '*Please add an author'
            title.classList.add('input-error')
            author.classList.add('input-error')
            return
        }
        if(title.value == '' || title.value == null){
            console.log('title check ran')

            titleError.innerHTML = '*Please add a title'
            title.classList.add('input-error')
            return
        }
        if(author.value =='' || author.value == null){
            console.log('author check ran')

            authorError.innerHTML = '*Please add an author'
            author.classList.add('input-error')
            return
        }
        if(title.value !== '' || title.value !== null && title.value !== '' || title.value !== null){
            console.log('making a book')
            e.preventDefault();
            let makeNewBook = new Book(title.value, author.value);

    
            return makeNewBook
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
        

    cardContainer.addEventListener('click', deleteCard)
    //cardContainer.addEventListener('click', changeCheckbox)



    // function changeCheckbox(e){
    //     console.log('change checkbox function was called and started to run')
    //     let checkbox = e.target 
    //     console.log(this.Book)

    //     checkbox.readStatus = true
    //     return checkbox
    // }

// cardContainer.addEventListener('click', deleteCard)


    //Helper Functions
    function clearContainer(){
        document.getElementById('wrap').innerHTML = "";
    }








    function deleteCard(e){


        const libraryPosition = e.target.parentElement.getAttribute('data-id');

        const updateLibrary = library.splice(libraryPosition, 1);

        clearContainer();
        showBooks();

    }








    
    } //close window on ready






