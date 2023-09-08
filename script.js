// current day of the week
const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday', 
    'Friday',
    'Saturday'

];


const currentDayElement = document.getElementById('Current-day-Val');
const date = new Date ();
const currentDayIndex = date.getDay();
currentDayElement.innerText = daysOfTheWeek[currentDayIndex];

// current time in milliseconds

const currentTimeElement = document.getElementById('current-utc-time-val');
currentTimeElement.innerText = Date.now();

