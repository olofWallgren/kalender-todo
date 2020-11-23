window.addEventListener('load',startProgram);
let dateArray = [];
function startProgram(){
    createArray()
    addEmptyDates()
}
   
   // skapar en array fr varje datum i november
function createArray(){
    for (let i = 1; i <= 30; i++){
        let currentDate = new Date (`2020-11-${i}`);
        let item = { "index": i, "date": currentDate, }
        dateArray[i] = item
        addDateToDiv(item)
       
    }
}
    // skapar en tagg i html med datumet i
function addDateToDiv(item){
    let dateDiv = document.getElementById(item.index);
    dateDiv.innerHTML = `<h3>${item.date.getDate()}</h3>`

}
// skapr tomma rutor om tex månaden brjar på en söndag
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




