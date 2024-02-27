const API_KEY = "e47facd6708652a76a872051ab7d1f6c";

function onGeoOK(position){
    console.log(position)
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:last-child");
            const city = document.querySelector("#weather span:first-child");
            weather.innerText = `${data.weather[0].description} / ${data.main.temp}°C`;
            city.innerText = data.name;
    });
}
function onGeoError() {
    alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

