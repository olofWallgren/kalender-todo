window.addEventListener('load',startProgram);
function startProgram(){
    addEventListeners()
}
function addEventListeners() {

};

// global variables
const todoContainer = document.querySelector('#todoContainer');
const createBtn = document.querySelector('#createBtn');
const userInputValue = document.querySelector('#todoInput');


// Eventlisteners
createBtn.addEventListener('click', addTodo);


// Array for dates in month
const daysOfMonth = [ 
    null,
    null,
    null,
    null,
    null,
    null,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    ];

// Function to append a new todo to the sidebar
function addTodo() {

    // Create the container of the todo
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const todoContent = document.createElement('p');
    todoContent.classList.add('item-text');
    todoContent.innerText = userInputValue.value;
    todoItem.appendChild(todoContent)

    const todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.innerText = 'X';
    todoDeleteBtn.classList.add('delete-btn');
    todoItem.appendChild(todoDeleteBtn)

    todoContainer.appendChild(todoItem);

    userInputValue.value = "";

    console.log(userInputValue.value)
}