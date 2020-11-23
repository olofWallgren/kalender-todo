window.addEventListener('load',startProgram);
function startProgram(){
    addEventListeners()
    startTime()
}
function addEventListeners() {
    populateTodoArray()

};

// global variables

const createBtn = document.querySelector('#createBtn');
const userInputValue = document.querySelector('#todoInput');
const todoDate = document.querySelector('#todoDate');

// console.log(todoDate.value)


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


/** todo array that stores the todos in an object
 *  Items in object, todo and date
 *  Date is the common denominator between the todo array and calender array
 */
let todoArray = [];

/** This function pushes the user input to the todo array */
function pushTodoArray() {
    
    todoArray.push({todo:userInputValue.value, date:todoDate.value})

    printTodos()
    saveTodoToLS()
}

/** This function prints the todos on screen, when removed from array it also removes from screen */
function printTodos() {

    // Cleares the todoList div of todos that are ereased from todo array
    todoList.innerHTML = "";

    // A loop to print out the todo, and paragraph with the todo and one button to erease the todo from array
    for (let i = 0; i < todoArray.length; i++) {

        // Creates an varible to the array for use on the created paragraph
        const todoData = todoArray[i];

        const todoList = document.querySelector('#todoList');

        const todoDeleteBtn = document.createElement('button');        
        const todoContent = document.createElement('p');

        todoDeleteBtn.addEventListener('click', () => {
            todoArray.splice(i,1);
            printTodos();
        })

        // Creates the container of the todo
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        // Creates the paragraph
        todoContent.innerText = todoData.todo;
        todoContent.classList.add('item-text');
        todoItem.appendChild(todoContent)

        // Creates the button
        todoDeleteBtn.innerText = 'X';
        todoItem.appendChild(todoDeleteBtn)
        todoDeleteBtn.classList.add('delete-btn');

        // Appends the todo item to the todoList div
        todoList.appendChild(todoItem);

        // Erease old userinput todo
        userInputValue.value = "";
    }
    console.log(todoArray)
}

// Save to local storage

function saveTodoToLS() {

    let todoToString = JSON.stringify(todoArray)
    // console.log(todoToString)

    localStorage.setItem('todo', todoToString)         
}

function populateTodoArray() {

    let todoBack = JSON.parse(localStorage.getItem('todo'))
    todoArray = todoBack;
    console.log(todoBack)

    printTodos();
    // console.log(todoBack)

}