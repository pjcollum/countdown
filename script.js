// Toggle Dropdown
function dropDown() {
    var element = document.getElementById('t&c');       //on click add the hidden class to the div
    element.classList.toggle("hidden");
}

//Countdown Timer
const endDate = new Date(Date.parse("February 17, 2022 00:00:00"));    //enter end time of countdown, date.parse to convert string to number

function getTimeRemaining(endDate) {
    const total = Date.parse(endDate) - Date.parse(new Date());     //date.parse to convert the date string to a number
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);      //converts milliseconds to hours
    const minutes = Math.floor((total / 1000 / 60) % 60);           //converts milliseconds to minutes
    const seconds = Math.floor((total / 1000) % 60);                //converts milliseconds to seconds
    return {
      total,
      hours,
      minutes,
      seconds
    };
}
  
function initializeClock(id, endDate) {
    const clock = document.getElementById("clockdiv");
    const hoursId = document.getElementById('hours');
    const minutesId = document.getElementById('minutes');
    const secondsId = document.getElementById('seconds');

    function updateClock() {
        const t = getTimeRemaining(endDate);

        hoursId.innerHTML = t.hours;  //if one digit, place a zero in front
        minutesId.innerHTML = t.minutes;
        secondsId.innerHTML = t.seconds;

        if (t.total <= 0) {                     //keeps timer at zero when countdown has been reached
           clearInterval(timeinterval);
        }
    }
    
    updateClock();
    const timeinterval = setInterval(updateClock, 1000); //update timers updateClock() every second
}

initializeClock('clockdiv', endDate);


//Solution 2 - prints countdown to console

const d1 = new Date();
const d2 = new Date(Date.parse("February 17, 2022 00:00:00"));
console.log(d2-d1);
const msDiff = d2 - d1;
const daysDiff = msDiff/1000/60/60/24;
console.log(daysDiff);

const hours1 = Math.floor((msDiff / (1000 * 60 * 60)) % 24);      //converts milliseconds to hours
const minutes1 = Math.floor((msDiff / 1000 / 60) % 60);           //converts milliseconds to minutes
const seconds1 = Math.floor((msDiff / 1000) % 60);   
console.log(hours1 + " hours " + minutes1 + " minutes " + seconds1 + " seconds");