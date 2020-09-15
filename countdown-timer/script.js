const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const birthday = '7 Sep 2021';

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();
    const getYear = new Date().getFullYear();
    const getMonth = new Date().getMonth();
    const getDay = new Date().getDate();

    var getDaysInMonth = function(month,year) {
        return new Date(year, month+1, 0).getDate();
    }
    
    const monthDays = getDaysInMonth(getMonth, getYear);
    const totalSeconds = (birthdayDate - currentDate) / 1000;

    const months = Math.floor(totalSeconds / 3600 / 24 / 7 / 52 * 12);
    const days = monthDays - getDay;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    monthsEl.innerHTML = months;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);