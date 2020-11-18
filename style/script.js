window.onload = startTime;

function startTime() {
    const date = new Date();
    
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
    const t = setTimeout(startTime, 500);

    const weekdayHolder = document.getElementById('weekday');
    weekdayHolder.innerText = getWeekday(date);

    const monthHolder = document.getElementById('month');
    monthHolder.innerText = getMonth(date);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; 
    return i;
}

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

function getMonth(date) {
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