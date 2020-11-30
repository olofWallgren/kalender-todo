/** Load the program */
window.addEventListener('load', startProgram);

/** Function of sets of functions that starts at load */
function startProgram() {
    startTime()
    createArray()
    addEmptyDates()
}

// global variables
/** Variable for create btn for todo */
const createBtn = document.querySelector('#createBtn');
/** Variable to get the input value from user */
const userInputValue = document.querySelector('#todoInput');
/** Varable to get the calender input from user */
const todoDate = document.querySelector('#todoDate');
/** Variable for the warning when user haven't put something into input field and click add todo */
const alertText = document.querySelector('.alert-message');

// Eventlisteners
createBtn.addEventListener('click', pushTodoArray);

