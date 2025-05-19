document.addEventListener("DOMContentLoaded", () => {

    //===Get DOM Elements===
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addButton = document.getElementById("addButton");

    //===Create and insert character counter===
    const charCounter = document.createElement('p');
    charCounter.id = "charCounter";
    charCounter.textContent = "Characters entered: 0";
    taskInput.after(charCounter);

    //===Logic===
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
            li.appendChild(createRedCrossBtn())
            taskInput.value = "";
            charCounter.textContent = "Characters entered: 0";
        }
    }

    function updateCharCounter() {
        const textLength = taskInput.value.length;
        charCounter.textContent = `Characters entered: ${textLength}`;
    }

    function highlightTask(event) {
        if (event.target.tagName === "LI") {
            event.target.style.backgroundColor = "lightblue";
            event.target.style.transition = "background-color 3s ease";
        }
    }

    function unHighlightTask(event) {
        if (event.target.tagName === "LI") {
            event.target.style.backgroundColor = "transparent";
        }
    }

    function handleRightClick(event) {
        event.preventDefault();
        showContextMenu(event.pageX, event.pageY, [
            {
                label: "Clear input",
                onClick: () => clearInput(taskInput, charCounter)
            },
            {
                label: "Show task counter",
                onClick: () => showTaskStats(taskList)
            }
        ])
    }


    function toggleStrike(e) {
        e.preventDefault();
        if (e.target.tagName === "LI") {
            const li = e.target;
            if (li.style.textDecoration === "line-through") {
                li.style.textDecoration = "none";
            } else {
                li.style.textDecoration = "line-through";
            }
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            addTask()
        }
    }

    function createRedCrossBtn() {
        const redCrossBtn = document.createElement("button");
        redCrossBtn.className = "redCrossBtn";
        redCrossBtn.textContent = "\u274C"
        return redCrossBtn;
    }

    function deleteTaskOnRedCrossClick(event) {
        if (event.target.classList.contains("redCrossBtn")) {
            event.target.closest("LI").remove();
        }
    }

    //===Listeners===
    taskInput.addEventListener("input", updateCharCounter);
    taskList.addEventListener('mouseover', highlightTask);
    taskList.addEventListener('mouseout', unHighlightTask);
    addButton.addEventListener("click", () => {
        addTask()
    });
    taskList.addEventListener("click", deleteTaskOnRedCrossClick);
    addButton.addEventListener('contextmenu', handleRightClick);
    taskInput.addEventListener("keydown", handleKeyDown);
    taskList.addEventListener("contextmenu", toggleStrike);
})