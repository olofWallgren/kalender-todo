window.addEventListener('load',startProgram);
function startProgram(){
    addEventListeners()
    startTime()
    createArray()
    addEmptyDates()
}
function addEventListeners() {

};

// global variables

const createBtn = document.querySelector('#createBtn');
const userInputValue = document.querySelector('#todoInput');
const todoDate = document.querySelector('#todoDate');
const divDate = 
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


/** todo array that stores the todos in an object
 *  Items in object, todo and date
 *  Date is the common denominator between the todo array and calender array
 */
let todoArray = [];

let todoDates = [];

// TODO: OLOF denna tabellen
let countTodos = [];


// TODO: Olof denna funktionen tar ut datumen i antal
function countTodoDates() {

    for (let i = 0; i < todoArray.length; i++) {
        todoDates.push(todoArray[i].date)
    }

    todoArray.sort();

    let current = null;
    let number = 0;

    for (let i = 0; i < todoDates.length; i++) {
        if(todoDates[i] != current) {
            if (number > 0) {
            countTodos.push({date:current, count:number})
            }
        current = todoDates[i];
        number = 1;
    }
    else {
        number++;
    }
    if (number > 0) {
        countTodos.push({date:current, count:number})
    }
}
}

/** This function pushes the user input to the todo array */
function pushTodoArray() {

    
    todoArray.push({todo:userInputValue.value, date:todoDate.value})
    
    countTodoDates()

    console.log(todoDates)
    console.log(countTodos)

    printTodos()
}

/** This function prints the todos on screen, when removed from array it also removes from screen */
function printTodos() {

    // Cleares the todoList div of todos that are ereased from todo array
    todoList.innerHTML = "";

    countTodoDates()
    // A loop to print out the todo, and paragraph with the todo and one button to erease the todo from array
    for (let i = 0; i < todoArray.length; i++) {

        addTodoToDate( todoArray[i])
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
  
   

   
   
    // let item = dateArray.find(item => item.date == todoArray.date);
    // let test = document.getElementById(item.index);
    // console.log(test)
}
function addTodoToDate(todo){
    console.log(dateArray)
    
    let dateItem = dateArray.filter(function(item) {
        return item.dateString == todo.date;
      });
    
    console.log(dateItem[0])
    let dateDiv = document.getElementById(dateItem[0].index)
    let node = document.createElement("p");
    node.innerText = todo.todo
    dateDiv.appendChild(node);
}



 
 
    
    // 
        


// Function to append a new todo to the sidebar
// function addTodo() {

//     // Create the container of the todo
//     const todoItem = document.createElement('div');
//     todoItem.classList.add('todo-item');

//     const todoContent = document.createElement('p');
//     todoContent.classList.add('item-text');
//     todoContent.innerText = userInputValue.value;
//     todoItem.appendChild(todoContent)

//     const todoDeleteBtn = document.createElement('button');
//     todoDeleteBtn.innerText = 'X';
//     todoDeleteBtn.classList.add('delete-btn');
//     todoItem.appendChild(todoDeleteBtn)

//     todoContainer.appendChild(todoItem);

//     userInputValue.value = "";

//     console.log(userInputValue.value)
// }