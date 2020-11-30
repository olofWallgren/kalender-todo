window.addEventListener('load', startProgram);
function startProgram() {
    startTime()
    createArray()
    addEmptyDates()
}

// global variables
const createBtn = document.querySelector('#createBtn');
const userInputValue = document.querySelector('#todoInput');
const todoDate = document.querySelector('#todoDate');
const alertText = document.querySelector('.alert-message');

// Eventlisteners
createBtn.addEventListener('click', pushTodoArray);

