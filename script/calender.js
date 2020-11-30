
let dateArray = [];

/**
 * Creates an array for every date in November
 */
function createArray(){
    for (let i = 1; i <= 30; i++){
        let currentDate = new Date (`2020-11-${i} 15:00`);
        let item = { "index": i, "date": currentDate,"dateString":currentDate.toISOString().slice(0,10)}
       
        dateArray[i] = item
        addDateToDiv(item)        
    }
}

 /**
    * creates h3-tag in calender div with the current dates
    * @param {[number,Date,string]} item 
    */
function addDateToDiv(item){
    let dateDiv = document.getElementById(item.index);
    dateDiv.innerHTML = `<h3>${item.date.getDate()}</h3>`

}

/**
 * creates empty calender-div before the current date divv´s based on the current day number 
 */
function addEmptyDates() {
    let datesDiv = document.getElementById("dates")
    let currentDay = new Date("2020-11-01").getDay();
    let runs = -1;
    if (currentDay == 0)
        runs = 6;
    else
        runs = currentDay -1;
    for (let i = 0; i < runs; i++) {
        let emptyDate = document.createElement("div");
        emptyDate.classList.add("calender-item")
        datesDiv.insertAdjacentElement('afterbegin', emptyDate)
    }
    
}

