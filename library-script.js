const library = [];
let deletedBookISBN;

const addBookBtn = document.getElementById('addBook');

const inputIsbn = document.getElementById("isbn")
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputYearPublishing = document.getElementById("year");

const allInputs = Array.from(document.querySelectorAll("div input"));
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
    listItem.append(createUniqueRedCrossBtn(currentBook));
}

function createUniqueRedCrossBtn(currentBook) {
    const delButton = document.createElement('button');
    delButton.innerText = ' \u274C ';
    delButton.className = 'btn';
    delButton.id = `${currentBook.isbn}`;

    return delButton;
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

function allInputsFilled() {
    if (inputIsbn.value !== '' || inputTitle.value !== '' ||
        inputAuthor.value !== '' || inputYearPublishing.value !== '') {
        return true;
    }
}

function reCountStats() {
    console.log(library)
    library.splice(library.findIndex(i => i.isbn === deletedBookISBN), 1);
    console.log(library)

    if (library.length === 0) {
        deleteStats();
    } else {
        showStats();
    }
}

function deleteStats() {
    document.querySelectorAll('#stats div').forEach(el => {
        el.remove()
    })
}

function deleteBook(event) {
    if (event.target.classList.contains('btn')) {
        deletedBookISBN = event.target.getAttribute('id');

        event.target.closest('li').remove();
    }
}

//==== Listeners ======

addBookBtn.addEventListener('click', () => {
    if (!allInputsFilled()) {
        alert('Please fill all forms');
        allInputs
            .filter(item => item.value === "")
            .forEach(item => item.style.borderColor = "red");
    } else {
        addBookToList();
        showStats();
    }
})

allInputs.forEach(input => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (!allInputsFilled()) {
                alert('Please fill all forms');
                allInputs
                    .filter(item => item.value === "")
                    .forEach(item => item.style.borderColor = "red");
            } else {
                addBookToList();
                showStats();
            }
        }
    })
})

libraryList.addEventListener('click', (event) => {
    deleteBook(event);
    reCountStats();
})

//==== Entities ======
function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}