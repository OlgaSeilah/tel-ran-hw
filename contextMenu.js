function showContextMenu(x, y, actions) {
    const menu = ensureContextMenuExists();
    menu.innerHTML = "";//clear previous menu
    for(let i = 0; i < actions.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = actions[i].label;
        btn.addEventListener('click', actions[i].onClick);
        menu.appendChild(btn);
    }
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
    menu.hidden = false;

}

function clearInput(taskInput, charCounter) {
    taskInput.value = "";
    charCounter.textContent = "Characters entered: 0";
    hideMenu();
}

function showTaskStats(taskList) {
    const taskCount = taskList.childElementCount;
    alert(`There are ${taskCount} tasks in the list`);
    hideMenu();
}

function ensureContextMenuExists(){
    let menu = document.getElementById("contextMenu");
    if(!menu) {
        menu = document.createElement("div");
        menu.id = "contextMenu";
        menu.className = "custom-menu";
        menu.hidden = true;
        document.body.appendChild(menu);
    }
    return menu;
}

function hideMenu() {
    const menu = document.getElementById("contextMenu");
    menu.hidden = true;
}