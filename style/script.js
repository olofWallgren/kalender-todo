window.addEventListener('load', startProgram);
function startProgram() {
    addEventListeners()
    startTime()
    createArray()
    addEmptyDates()
}
function addEventListeners() {

   // populateTodoArray()
  //  deleteTodoLS()   


};

// global variables

const createBtn = document.querySelector('#createBtn');
const userInputValue = document.querySelector('#todoInput');
const todoDate = document.querySelector('#todoDate');
const alertText = document.querySelector('.alert-message');

// Eventlisteners
createBtn.addEventListener('click', pushTodoArray);





/** todo array that stores the todos in an object
 *  Items in object, todo and date
 *  Date is the common denominator between the todo array and calender array
 */
let todoArray = [];

let todosDate = [];

let countTodos = [];


/** Function to create an arrary of numbers of todos per day */
function todoSum() {

    clearTodoText()

    todosDate = [];
    countTodos = [];

    for (let i = 0; i < todoArray.length; i++) {
        todosDate.push(todoArray[i].date)
    }

    todosDate.sort();

    let currentDay = null;
    let count = 0;

    for (let i = 0; i < todosDate.length; i++) {
        if(todosDate[i] != currentDay) {
            if (count > 0) {
                countTodos.push({date:currentDay, count:count})
            }
            currentDay = todosDate[i];
            count = 1;
        }
        else {
            count++;
        }
    }
    if (count > 0) {
        countTodos.push({date:currentDay, count:count})
    }
    
}

/** This function pushes the user input to the todo array */
function pushTodoArray() {

    if (userInputValue.value === '') {
        userInputValue.style.border = '2px solid var(--clr-bg)';
        alertText.innerText = 'Fyll i ett värde:';
    } else {
        userInputValue.style.border = '2px solid black';
        alertText.innerText = '';
        todoArray.push({ todo: userInputValue.value, date: todoDate.value })
        
        console.log(todosDate)
        console.log(countTodos)

        printTodos()
    }

    

}

/** This function prints the todos on screen, when removed from array it also removes from screen */
function printTodos() {   


    // Cleares the todoList div of todos that are ereased from todo array
    todoList.innerHTML = "";

    // TODO: OLOF
    // renar todo-texten i calender-item divven
    clearTodoText()
    
    // A loop to print out the todo, and paragraph with the todo and one button to erease the todo from array
    for (let i = 0; i < todoArray.length; i++) {       
        todoSum()
        // TODO: NICKLAS
        for (let i = 0; i < countTodos.length; i++) {
            
            addTodoToDate(countTodos[i])
        }

        // TODO: OLOF
        //addTodoToDate(todoArray[i])

        // Creates an varible to the array for use on the created paragraph
        const todoData = todoArray[i];

        const todoList = document.querySelector('#todoList');

        const todoDeleteBtn = document.createElement('button');
        const todoContent = document.createElement('p');

        todoDeleteBtn.addEventListener('click', () => {

            todoArray.splice(i,1);
            //deleteTodoLS(todoData)

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
        todoDeleteBtn.innerHTML = '<i class="fas fa-times-circle"></i>';
        todoItem.appendChild(todoDeleteBtn)
        todoDeleteBtn.classList.add('delete-btn');

        // Appends the todo item to the todoList div
        todoList.appendChild(todoItem);

        // Erease old userinput todo
        userInputValue.value = "";

    }


}

// TODO: NICKLAS
// skapar todo-texten i calender-item divven

function addTodoToDate(todo) {

    //clearTodoText()

    let dateItem = dateArray.filter(item => {
        return item.dateString == todo.date;
    });

    let dateDiv = document.getElementById(dateItem[0].index)
    node = document.createElement("p");
    node.innerText = todo.count;
    dateDiv.appendChild(node);   

}



// TODO: OLOF
// skapar todo-texten i calender-item divven
/*
function addTodoToDate(todo) {
    let dateItem = dateArray.filter(item => {
        
        return item.dateString == todo.date;
      
    });
   

    let dateDiv = document.getElementById(dateItem[0].index)
    node = document.createElement("p");
    node.innerText = todo.todo;
    dateDiv.appendChild(node);

}
*/

//rensar texten i calender-items divven
function clearTodoText() {
    document.querySelectorAll(".calender-item").forEach(item => {
        item.querySelectorAll("p").forEach(paragraph => {
            item.removeChild(paragraph);
        })
    })
}

// Save to local storage














    // 



// Function to append a new todo to the sidebar
// function addTodo() {
/*
function saveTodoToLS() {


    let todoToString = JSON.stringify(todoArray)
    // console.log(todoToString)

    localStorage.setItem('todo', todoToString)         
}

function populateTodoArray() {

    if (localStorage.getItem('todo') === null) {

    }
    else {
    let todoBack = JSON.parse(localStorage.getItem('todo'))
    todoArray = todoBack;
    console.log(todoBack)

    printTodos();
    }
}
*/
/** Function to remove one todo from local storage and populate it with the rest of todoArray */
/*
function deleteTodoLS() {

    // Clean the local storage
    localStorage.clear();

    // A loop to send every todo from the todoArray to local storage
    for ( i = 0; i < todoArray.length; i++) {
        saveTodoToLS()
    }
}
*/
