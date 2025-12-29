const apiKey = "990cd58571a4c050477ddc2842d0b778";

function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const loader = document.getElementById("loader");
    const info = document.getElementById("weatherInfo");

    if (city === "") {
        alert("City name likho");
        return;
    }

    loader.style.display = "block";
    info.style.display = "none";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            loader.style.display = "none";

            if (data.cod != 200) {
                alert("City not found ya API inactive");
                return;
            }

            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
            document.getElementById("condition").innerText = data.weather[0].main;
            document.getElementById("humidity").innerText = data.main.humidity + "%";
            document.getElementById("wind").innerText = data.wind.speed + " km/h";

            info.style.display = "block";
        })
        .catch(() => {
            loader.style.display = "none";
            alert("Network error");
        });
}
