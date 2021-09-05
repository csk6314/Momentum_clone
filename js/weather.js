const API_KEY = "9b99845d2961e9524b17c30e36ca0e8f";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url).then(response =>response.json()).then(data => {
        const city = document.getElementById("city");
        const country = document.getElementById("country");
        const weather = document.getElementById("weather");
        console.log(data.name,data.weather[0].main,data.sys.country);
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        country.innerText = data.sys.country;
    });
}
function onGeoError() {
    alert("당신의 위치를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);