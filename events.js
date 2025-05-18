const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const btnAddTask = document.getElementById('btnAddTask');
let taskText;

const tasksCountRow = document.getElementById('tasksCountRow');
const tasksCountSpan = document.getElementById('tasksCountInputListener');
const charCountRow = document.getElementById('charCountRow');
const charCountSpan = document.getElementById('charCountInputListener');

document.addEventListener('DOMContentLoaded', (event) => {

    btnAddTask.addEventListener('click', () => {
        createLIOnMouseClick()
        countTasks()
        resetCharCounter()
    })

    btnAddTask.addEventListener('contextmenu', () => {
        alertOnContextClick()
    })

    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            createLIOnEnterDown(taskInput)
            countTasks()
            resetCharCounter()
        }
    })

    taskInput.addEventListener('input', (event) => {
        countSymbols()
    })

})

function createLIOnMouseClick() {
    taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const listItem = createListItemWithStyle();
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = '';
        eventOnMouseOverAndOut();
    }
}

function createLIOnEnterDown(element) {
    taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const listItem = createListItemWithStyle();
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = '';
        eventOnMouseOverAndOut();
    }
}

function alertOnContextClick() {
    alert("Правый клик по кнопке отключен!")
}

function createListItemWithStyle() {
    const listItemWithStyle = document.createElement('li');
    listItemWithStyle.style.width = '50%'
    listItemWithStyle.style.padding = '2px';
    listItemWithStyle.style.margin = '3px';

    return listItemWithStyle;
}

function countTasks() {
    tasksCountSpan.textContent = taskList.getElementsByTagName('li').length;
    tasksCountRow.appendChild(tasksCountSpan)
}

function countSymbols() {
    charCountSpan.textContent = taskInput.value.length;
    charCountRow.appendChild(charCountSpan)
}

function resetCharCounter() {
    charCountSpan.textContent = 0;
    charCountRow.appendChild(0)
}

function eventOnMouseOverAndOut() {
    for (let task of taskList.getElementsByTagName('li')) {
        task.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = '#f0f0f0';
        })
        task.addEventListener('mouseout', (event) => {
            event.target.style.backgroundColor = 'white';
        })
    }
}