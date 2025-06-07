function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    element.append(content);
    return element;
}

function createButtonDel(callback) {
    const buttonDel = document.createElement('button');
    buttonDel.append('X');
    buttonDel.style.color = 'red';
    buttonDel.style.marginLeft = '5px';
    buttonDel.addEventListener('click', function ({target}) {
        target.parentElement.remove();
        if (typeof callback === 'function') {
            callback();
        }
    });
    return buttonDel;
}

function createListRow(employee, content, tag) {
    const employeesListItem = createInfoElement(content, tag);

    const btnDel = createButtonDel(() => {
        const personId = employee.id;
        firm.removeEmployee(personId);

        if (firm.size === 0) {
            deleteStats();
        } else {
            countAndShowStats();
        }

    })

    employeesListItem.append(btnDel);

    employeesListItem.style.border = '1px solid gray';
    employeesListItem.style.display = 'flex';
    employeesListItem.style.width = '50%';
    employeesListItem.style.justifyContent = 'space-between';

    return employeesListItem;
}