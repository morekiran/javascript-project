let HourEl = document.getElementById("hour")
let MinuteEl = document.getElementById("minutes")
let SecondsEl = document.getElementById("seconds")
let AmPm = document.getElementById("ampm")


function updateClock() {
    
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let ampm = "";

    if( h >= 12){
        ampm = "PM";
    }else{
        ampm = "AM"
    }

    if( h > 12){
        h = h -12;
    }

    if(h < 10){
        h = "0" +h;
    }else{
        h=h;
    }

    if( m < 10){
        m = "0" + m;
    }else{
        m=m;
    }

    if( s < 10){
        s = "0" +s;
    }else{
        s=s;
    }
    
    HourEl.innerText = h;
    MinuteEl.innerText = m;
    SecondsEl.innerText = s;
    AmPm.innerText = ampm;

    setInterval(() => {
        updateClock();
    }, 1000);
}

updateClock();