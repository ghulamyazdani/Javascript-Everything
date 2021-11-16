const daysEm = document.getElementById('days');
const hoursEm  = document.getElementById('hours');
const minutesEm = document.getElementById('minutes');
const secondEm = document.getElementById('second');
var newYear = "1 jan 2022";

function countDates() {
var newYearDate = new Date(newYear);
var currentDate = new Date();
const days = Math.floor((newYearDate - currentDate) / (1000*60 * 60 * 24));
const hours = Math.floor((newYearDate - currentDate) / (1000 * 60 * 60)%24);
const minutes = Math.floor((newYearDate - currentDate) / (1000 * 60)%60);
const seconds = Math.floor((newYearDate - currentDate) / 1000%60);
daysEm.innerHTML = days;
hoursEm.innerHTML = timeFormat(hours);
minutesEm.innerHTML = timeFormat(minutes);
secondEm.innerHTML = timeFormat(seconds);
}
const timeFormat = (time) => {return time<10 ?`0${time}`: time;};
countDates();
setInterval(countDates, 1000);