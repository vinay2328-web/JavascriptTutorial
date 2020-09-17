console.log('#Tuts-61: Creating Clock in Javascript');

// Clock element
const clockElement = document.getElementById('clock');

// Creating displayClock function
function displayClock() {
    // get current time
    let currentTime = new Date();

    // Extract hour, minute and seconds from date
    let currentHours = currentTime.getHours(),
        currentMinutes = currentTime.getMinutes(),
        currentSeconds = currentTime.getSeconds();

    // Beautify the hours and seconds
    // Pad 0 if minutes and seconds is less than 10 (single digit)
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Covert 24 hours clock to AM/PM
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;

    // Choose AM/PM as per time of the day
    let timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Prepare the time string in hours, minutes and seconds
    // let currentTimeStr = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    let currentTimeStr = `<span class="digitOnly">${currentHours}</span>
                          <span class="digitOnly">${currentMinutes}</span>
                          <span class="digitOnly">${currentSeconds}</span>
                          <span class="digitOnly">${timeOfDay}</span>`;

    // Insert the time string inside the DOM
    clockElement.innerHTML = currentTimeStr;
}
