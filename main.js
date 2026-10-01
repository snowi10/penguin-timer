// TODO: Create a function to set a timer.

// Sets the current time in the HTML document.
function setTime(newTime) {
    let date = document.getElementById('digits');
    date.innerHTML = newTime; 
}

// Gets the current time.
function getTime() {
    const date = new Date();
    setTime(date.toLocaleTimeString("it-IT"));
}

// Displays the current time every second.
setInterval(getTime, 1000);