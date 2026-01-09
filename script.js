const apiKey = "f1a834eda8c7ffdc95581f4efcfb8c56";

function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        document.getElementById("weather").innerText = "Please enter a city name";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.cod !== 200) {
                document.getElementById("weather").innerText = "City not found ❌";
                return;
            }

            const temp = data.main.temp;
            const condition = data.weather[0].description;

            document.getElementById("weather").innerHTML =
                `🌡️ Temperature: ${temp}°C <br> ☁️ Condition: ${condition}`;
        })
        .catch(error => {
            document.getElementById("weather").innerText = "Error fetching weather 😢";
        });
}

/* 🌙 DARK MODE */
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
