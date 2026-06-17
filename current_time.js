
let current_time = "23:56:45";


let [hours,min,sec] = current_time.split(":").map(Number);

function liveClock() {
    sec++;

    if(sec === 60) {
        sec = 0;
        min++;
    }
    if(min === 60) {
        min = 0;
        hours++;
    }
    if(hours === 24) {
        hours = 0;
    }

    console.log(hours+":"+min+":"+sec);

    let clock = 
        String(hours).padStart(2, '0') + ":" +
        String(min).padStart(2, '0') + ":" +
        String(sec).padStart(2, '0');

    document.getElementById("time").innerHTML = clock;
}

function currentTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("currentTime").innerText = hours + ":" + minutes + ":" + seconds;
}

setInterval(function() {
        liveClock();
        currentTime();
    },1000
);