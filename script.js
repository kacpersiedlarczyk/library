const library = document.querySelector(".library");


const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};


function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);

    displayBooks();
};

function displayBooks() {
    library.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        library.innerHTML += `
            <div class="book">
                <h1>${myLibrary[i].title}</h1>
                <p>Author: ${myLibrary[i].author}</p>
                <p>Pages: ${myLibrary[i].pages}</p>
                <button class="remove">Remove</button>
            </div>
        `;
    };
};



library.addEventListener("click", event => {
    console.log(
        event.target
    );
});












const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value; 
    const pages = document.querySelector("#pages").value; 

    addBookToLibrary(title, author, pages);

    // displayNewBook();
    
    event.target.reset();
});




// function displayNewBook() {
//     const lastBookIndex = myLibrary.length - 1;
//     const lastBook = myLibrary[lastBookIndex];


//     books.innerHTML += `
//     <div class="book" data-index="${lastBookIndex}">
//         <h1>${lastBook.title}</h1>
//         <p>Author: ${lastBook.author}</p>
//         <p>Pages: ${lastBook.pages}</p>
//         <button class="remove">Remove</button>
//     </div>
//     `;
// }







// addBookToLibrary("book1", "some", 222);
// addBookToLibrary("book2", "some", 333);
// addBookToLibrary("book3", "some", 444);


// for (let i = 0; i < myLibrary.length; i++) {
//     books.innerHTML += `
//         <div class="book">
//             <h1>${myLibrary[i].title}</h1>
//             <p>Author: ${myLibrary[i].author}</p>
//             <p>Pages: ${myLibrary[i].pages}</p>
//             <button class="remove">Remove</button>
//         </div>
//     `;
// };