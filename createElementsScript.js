function createElement(tag, value) {
    const element = document.createElement(tag);
    element.textContent = value;

    document.body.append(element);
}

function createOption(value, label) {
    const element = document.createElement('option');
    element.value = value;
    element.textContent = label;

    selectElement.append(element);
}