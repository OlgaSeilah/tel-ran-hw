const library = [];
const addBookBtn = document.getElementById('addBook');
const inputIsbn = document.getElementById("isbn")
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const allInputs = document.querySelectorAll("div input");
const inputYearPublishing = document.getElementById("year");
const libraryList = document.getElementById('result')

const statsDiv = document.getElementById('stats');

function addBookToList() {
    let currentBook = new Book(
        inputIsbn.value,
        inputTitle.value,
        inputAuthor.value,
        inputYearPublishing.value,
    )

    let isBook = library.find(item => item.isbn === currentBook.isbn);

    if (!isBook) {
        library.push(currentBook);
        createListItemWithBook(currentBook);
    }

    allInputs.forEach(input => {
        input.value = '';
    })
}

function createListItemWithBook(currentBook) {
    const listItem = document.createElement('li');
    listItem.textContent = currentBook.toString();
    libraryList.appendChild(listItem);
}


function showStats() {

    library.sort((item1, item2) => item1.year - item2.year);

    createStatsLine(`Min year of publishing: `, library[0].year,
        `Max year of publishing: `, library[library.length - 1].year,
        `Total books: `, library.length)
}


function createStatsLine(statsTitleMin, min,
                         statsTitleMax, max,
                         total, totalCount) {
    let minYearEl = document.querySelector('#stats #minYearEl');
    let maxYearEl = document.querySelector('#stats #maxYearEl');
    let totalCountEl = document.querySelector('#stats #totalCountEl');

    if (!statsDiv.contains(minYearEl)) {
        minYearEl = document.createElement('div');
        minYearEl.setAttribute('id', 'minYearEl');
        statsDiv.appendChild(minYearEl);
    }
    minYearEl.textContent = statsTitleMin + min;
    if (!statsDiv.contains(maxYearEl)) {
        maxYearEl = document.createElement('div');
        maxYearEl.setAttribute('id', 'maxYearEl');
        statsDiv.appendChild(maxYearEl);
    }
    maxYearEl.textContent = statsTitleMax + max;
    if (!statsDiv.contains(totalCountEl)) {
        totalCountEl = document.createElement('div');
        totalCountEl.setAttribute('id', 'totalCountEl');
        statsDiv.appendChild(totalCountEl);
    }
    totalCountEl.textContent = total + totalCount;
}

//==== Listeners ======

addBookBtn.addEventListener('click', () => {
    addBookToList();
    showStats();
})


//==== Entities ======
function Book(isbn, title, author, year) {
    this.isbn = +isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}