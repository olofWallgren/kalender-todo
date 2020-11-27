window.addEventListener('load', startProgram);
function startProgram() {
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






// Eventlisteners
createBtn.addEventListener('click', pushTodoArray);





/** todo array that stores the todos in an object
 *  Items in object, todo and date
 *  Date is the common denominator between the todo array and calender array
 */
let todoArray = [];

/** This function pushes the user input to the todo array */
function pushTodoArray() {

    todoArray.push({ todo: userInputValue.value, date: todoDate.value })

    printTodos()

}

/** This function prints the todos on screen, when removed from array it also removes from screen */
function printTodos() {



    // Cleares the todoList div of todos that are ereased from todo array
    todoList.innerHTML = "";
    // renar todo-texten i calender-item divven
    clearTodoText()
    // A loop to print out the todo, and paragraph with the todo and one button to erease the todo from array
    for (let i = 0; i < todoArray.length; i++) {

        addTodoToDate(todoArray[i])

        // Creates an varible to the array for use on the created paragraph
        const todoData = todoArray[i];

        const todoList = document.querySelector('#todoList');

        const todoDeleteBtn = document.createElement('button');
        const todoContent = document.createElement('p');

        todoDeleteBtn.addEventListener('click', () => {
            todoArray.splice(i, 1);

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


}
// skapar todo-texten i calender-item divven
function addTodoToDate(todo) {
    let dateItem = dateArray.filter(item => {
        
        return item.dateString == todo.date;
      
    });
   

    let dateDiv = document.getElementById(dateItem[0].index)
    node = document.createElement("p");
    node.innerText = todo.todo;
    dateDiv.appendChild(node);

}
//rensar texten i calender-items divven
function clearTodoText() {
    document.querySelectorAll(".calender-item").forEach(item => {
        console.log(item);
        item.querySelectorAll("p").forEach(paragraph => {
            console.log(paragraph);
            item.removeChild(paragraph);
        })
    })


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