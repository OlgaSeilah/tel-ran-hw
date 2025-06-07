// TODO continue develop classes Person, Employee, Company
// Hint: thinking in OOD (Encapsulation)
const firm = new Company();

const inputsArray = [...document.getElementsByTagName('input')];

//===== Listeners =====
addPerson.addEventListener("click", (e) => {
    createEmployeeRowAndShowStats();
})

inputsArray.forEach(input => input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        createEmployeeRowAndShowStats();
    }
}))

//===== Logic =====
function createEmployeeRowAndShowStats() {
    const [id, firstName, lastName, birthdate, salary] = inputsArray.map(elem => elem.value);
    const currentEmployee = new Employee(id, firstName, lastName, birthdate, salary);

    const isEmployeeAdded = firm.addEmployee(currentEmployee);

    if (isEmployeeAdded) {
        personList.append(createListRow(currentEmployee, currentEmployee.toString(), 'li'));
    }

    inputsArray.forEach(inputTuClear => {
        inputTuClear.value = ''
    })

    countAndShowStats();
}

function countAndShowStats() {
    const statsDiv = document.createElement('div');

    statsDiv.append(
        createInfoElement(`Min age: ${firm.minAge}`, 'h4'),
        createInfoElement(`Max age: ${firm.maxAge}`, 'h4'),
        createInfoElement(`Average age: ${firm.averageAge}`, 'h4'),
        createInfoElement(`Total salary: ${firm.totalSalary}`, 'h4'),
        createInfoElement(`Average salary: ${firm.averageSalary}`, 'h4'),
        createInfoElement(`Total persons: ${firm.size}`, 'h4')
    );

    if (stats.firstElementChild.nextElementSibling) {
        stats.replaceChild(statsDiv, stats.firstElementChild.nextElementSibling);

    } else {
        stats.append(statsDiv);
    }
}

function deleteStats() {
    stats.firstElementChild.nextElementSibling.remove();
}