// TODO: Create a function to set a timer.

// Sets the current time in the HTML document.
function setTime(newTime) {
    let date = document.getElementById('digits');
    date.innerHTML = newTime; 
}

// Displays the current time every second.
setInterval(getTime, 1000);

// Gets the current time.
function getTime() {
    const date = new Date();
    setTime(date.toLocaleTimeString("it-IT"));
}