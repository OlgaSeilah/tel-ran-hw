//============ Variables
const persons = [];

const personListOl = document.getElementById('personList');
const statsBlock = document.getElementById('stats');

const allInputFields = [...document.getElementsByTagName('input')];
const addPersonBtn = document.getElementById('addPerson');

//============ Logic
function addPersonToList() {
    let [id, firstName, lastName, age] = allInputFields.map(field => {
        return field.value;
    })

    const currentPerson = new Person(
        id, firstName, lastName, +age
    );

    const isPersonInList = persons.find(person => person.personId === currentPerson.personId);

    if (!isPersonInList) {
        persons.push(currentPerson);
        createListItemRowInOl(currentPerson);
    } else {
        alert(`person with ID ${currentPerson.personId} is already exists in the list`);
    }

    allInputFields.forEach(field => {
        field.value = '';
    })

    countStats();
}

function countStats() {
    const statsDiv = document.createElement('div');

    if(persons.length) {
        const ages = persons.map(person => person.age);

        const ageMin = Math.min(...ages);
        const ageMax = Math.max(...ages);

        const averageAge = persons.reduce((average, currentPerson) => average + currentPerson.age, 0) / persons.length;

        const minAgeText = createStatsRows(`Min age = ${ageMin}`, 'h4');
        const maxAgeText = createStatsRows(`Max age = ${ageMax}`, 'h4');
        const averageAgeText = createStatsRows(`Average age = ${averageAge.toFixed(1)}`, 'h4');
        const totalPersonsText = createStatsRows(`Total persons: ${persons.length}`, 'h4');

        statsDiv.append(minAgeText, maxAgeText, averageAgeText, totalPersonsText);
    }
    if(statsBlock.firstElementChild.nextElementSibling) {
        statsBlock.replaceChild(statsDiv, statsBlock.firstElementChild.nextElementSibling);
    } else {
        statsBlock.appendChild(statsDiv);
    }
}

//============ Work with HTML
function createListItemRowInOl(person) {
    const listItem = document.createElement('li');
    listItem.textContent = person.toString();
    listItem.style.display = 'flex';
    listItem.style.borderBottom = '1px solid #000';
    listItem.style.width = '30%'
    listItem.style.justifyContent = 'space-between';

    const btnDelete = createDelBtn(() => {
        const personId = person.id;
        persons.splice(personId, 1);
        countStats();
    });

    personListOl.appendChild(listItem).appendChild(btnDelete);
}

function createDelBtn(functionCallback) {
    const btnDelete = document.createElement('button');
    btnDelete.textContent = ' x ';
    btnDelete.style.borderColor = 'red';

    btnDelete.addEventListener('click', (event) =>{
        event.target.parentElement.remove();
        if (typeof functionCallback === 'function' ) {
            functionCallback();
        }
    });

    return btnDelete;
}

function createStatsRows(textContent, tag) {
    const row = document.createElement(tag);
    row.innerText = textContent;
    return row;
}

//============ Listeners
addPersonBtn.addEventListener('click', () => {
    addPersonToList();
})

allInputFields.forEach(inputField => {inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addPersonToList();
    }
})})

//=========== functions -> Entities
function Person(personId, firstName, lastName, age) {
    this.personId = personId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.toString = function () {
        return `ID: ${this.personId};  First Name: ${this.firstName};  Last Name: ${this.lastName};  Age: ${this.age}`
    }
}