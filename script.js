
const day = document.getElementById("Days");
const hour = document.getElementById("Hours");
const min = document.getElementById("Mins");
const sec = document.getElementById("Seconds");
const birthday = "1 April 2022";

function countdown() {
    const date = new Date(birthday);
    const currentDate = new Date();
    const second = Math.floor(date-currentDate)/1000;
    const days = Math.floor(second/3600/24);
    const hours = Math.floor(second/3600)%24;
    const minutes = Math.floor(second/60)%60;
    const tsec = Math.floor(second)%60;
    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = tsec;
}

// initial call
countdown();
setInterval(countdown,1000);