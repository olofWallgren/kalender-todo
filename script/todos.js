/** todo array that stores the todos in an object
 *  Items in object, todo and date
 *  Date is the common denominator between the todo array and calender array
 */
let todoArray = [];

/**
 * Array to get all the dates from the todo array
 */
let todosDate = [];

/**
 * Array to create at list of dates and counts of that day
 */
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

        printTodos()
    }   
}

/** This function prints the todos on screen, when removed from array it also removes from screen */
function printTodos() {   
    // Cleares the todoList div of todos that are ereased from todo array
    todoList.innerHTML = "";

    // renar todo-texten i calender-item divven
    clearTodoText()
    
    // A loop to print out the todo, and paragraph with the todo and one button to erease the todo from array
    for (let i = 0; i < todoArray.length; i++) {       
        todoSum()
        for (let i = 0; i < countTodos.length; i++) {
            
            addTodoToDate(countTodos[i])
        }

        // Creates an varible to the array for use on the created paragraph
        const todoData = todoArray[i];

        const todoList = document.querySelector('#todoList');

        const todoDeleteBtn = document.createElement('button');
        const todoContent = document.createElement('p');
        const todoDate = document.createElement('span');

        todoDeleteBtn.addEventListener('click', () => {

            todoArray.splice(i,1);
            //deleteTodoLS(todoData)

            printTodos();
        })

        // Creates the container of the todo
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        
        const todoContDiv = document.createElement('div');
        todoContDiv.classList.add('item-cont-div');
        todoItem.appendChild(todoContDiv)
        
        // Creates the paragraph for todo content
        todoDate.innerText = todoData.date;
        todoDate.classList.add('item-date');
        todoContDiv.appendChild(todoDate)

        // Creates the paragraph for todo content
        todoContent.innerText = todoData.todo;
        todoContent.classList.add('item-text');
        todoContDiv.appendChild(todoContent)


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
/**
 * filter the dateArray item and compare dates with todo.dates.
 * creates p-tag and insert the number of todo´s 
 * @param {[string,Date]} todo 
 */
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

/** 
 * loops throgh calender-item divv´s and remove the paragraph-element
 */
function clearTodoText() {
    document.querySelectorAll(".calender-item").forEach(item => {
        item.querySelectorAll("p").forEach(paragraph => {
            item.removeChild(paragraph);
        })
    })
}