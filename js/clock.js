const clock = document.querySelector("h2#clock");
const ampm = document.querySelector("#ampm");
clock.innerText = "lalal";

function getClock() {
    const date = new Date();
    const hoursNum = date.getHours();
    const minutes = String (date.getMinutes()).padStart(2,"0");
    const seconds = String (date.getSeconds()).padStart(2,"0");
    if(hoursNum >= 0 && hoursNum < 12) {
        clock.innerText=`${hoursNum}:${minutes}`;
        ampm.innerText = "AM";
    } else {
        clock.innerText=`${hoursNum-12}:${minutes}`;
        ampm.innerText="PM";
    }

}
getClock();
setInterval(getClock,1000);