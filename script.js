const library = [];
//isbn;title;author;year
let inputData = prompt('Enter book data separate by ";"');

while (inputData) {
    let bookData = inputData.split(';'); //bookData - array of separate strings

    if (findBook(library, bookData[0]) === -1) {
        library.push(new Book(bookData[0], bookData[1], bookData[2], bookData[3]));
        printLibrary(library);
    }
    inputData = prompt('Enter book data separate by ";"');
}

printLibrary(library);

function printLibrary(library) {
    for (const item of library) {

    }
}

function printBook(book) {

}

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        let isbnFromLibrary = library[i].isbn;
        console.log(`isbnFromLibrary: ${isbnFromLibrary}`);
        if (isbnFromLibrary === isbn) {
            return i;
        }
    }
    return -1;
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}