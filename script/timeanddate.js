/**
 * get time day and mounth and displays it in a HTML-element
 */
function startTime() {
    const date = new Date();
    
    let h = date.getHours();
    let m = date.getMinutes();
    
    m = checkTime(m);
    
    document.getElementById('time').innerHTML = h + ':' + m;
    const t = setTimeout(startTime, 1000);

    const weekdayHolder = document.getElementById('weekday');
    weekdayHolder.innerText = getWeekday(date);

    const monthHolder = document.getElementById('date');
    monthHolder.innerText = getDate(date) + ' ' + date.getFullYear();
}

/**
 * sets a "0" if the number is < 10
 * @param {*Number} i 
 */
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; 
    return i;
}

/**
 * converts the number of days into a string 
 * @param {* Date} date 
 */
function getWeekday(date) {
    const weekdayIndex =  date.getDay();

    switch(weekdayIndex) {
        case 0: return 'Söndag';
        case 1: return 'Måndag';
        case 2: return 'Tisdag';
        case 3: return 'Onsdag';
        case 4: return 'Torsdag';
        case 5: return 'Fredag';
        case 6: return 'Lördag';
    }
}

/**
 * converts the mounth-number into a  mounth-string
 * @param {*Date} date 
 * @returns{string}
 */
function getDate(date) {
    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth();

    const prefix = dayOfMonth + ' ';

    switch(monthIndex) {
        case 0: return prefix + 'Januari';
        case 1: return prefix + 'Februari';
        case 2: return prefix + 'Mars';
        case 3: return prefix + 'April';
        case 4: return prefix + 'Maj';
        case 5: return prefix + 'Juni';
        case 6: return prefix + 'Juli';
        case 7: return prefix + 'Augusti';
        case 8: return prefix + 'September';
        case 9: return prefix + 'Oktober';
        case 10: return prefix + 'November';
        case 11: return prefix + 'December';
    }
    
    return dayOfMonth + ' ' + monthIndex;
}