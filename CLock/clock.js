console.log('#Tuts-61: Creating Clock in Javascript');

// Clock element
const clockElement = document.getElementById('clock');

// Creating displayClock function
function displayClock() {
    // get current time
    let currentTime = new Date();
    let currentHours = currentTime.getHours(),
        currentMinutes = currentTime.getMinutes(),
        currentSeconds = currentTime.getSeconds();

    // Beautify the hours and seconds
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Display AM/PM
    let timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // display clock on dom element
    let currentTimeStr = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    clockElement.innerHTML = currentTimeStr;
}
