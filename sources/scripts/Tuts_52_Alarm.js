console.log("This is tutorial 54");
const alarmSubmit = document.getElementById('alarmSubmit');
const alarmPause = document.getElementById('alarmPause');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);
alarmPause.addEventListener('click', pauseBell);

var audio = new Audio('https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}
function pauseBell(e){
    e.preventDefault();
    audio.pause();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
}
