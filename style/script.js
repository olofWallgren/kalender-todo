window.addEventListener('load',startProgram);
function startProgram(){
    addEventListeners()
    startTime()
}
function addEventListeners() {

};

// global variables

const createBtn = document.querySelector('#createBtn');
const userInputValue = document.querySelector('#todoInput');
const todoDate = document.querySelector('#todoDate');

console.log(todoDate.value)


// Eventlisteners
createBtn.addEventListener('click', pushTodoArray);


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


let todoArray = [];

console.log(todoArray)

function pushTodoArray() {
    
    todoArray.push({todo:userInputValue.value, date:todoDate.value})

    printTodos()
}

function printTodos() {

    todoList.innerHTML = "";

    for (let i = 0; i < todoArray.length; i++) {

        const todoList = document.querySelector('#todoList');

        const todoDeleteBtn = document.createElement('button');               

        // Create the container of the todo
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const todoContent = document.createElement('p');
        todoContent.classList.add('item-text');
        todoItem.appendChild(todoContent)

        todoContent.innerText = userInputValue.value;
        todoDeleteBtn.classList.add('delete-btn');
        todoDeleteBtn.innerText = 'X';
        todoItem.appendChild(todoDeleteBtn)

        todoDeleteBtn.addEventListener('click', () => {
            todoArray.splice(i,1);
            printTodos();
        })        

        todoList.appendChild(todoItem);

        userInputValue.value = "";
    }
}