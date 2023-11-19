window.onload = function () {
    const city = prompt("Enter city name:");
    const apiKey = '0780bebe835f8b9ce8ac3af92b6fe761'; // Replace with your actual API key

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city').innerText = city;
                document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
                document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
            } else {
                alert("City not found or an error occurred.");
            }
        })
        .catch(error => {
            alert("An error occurred while fetching data.");
            console.error('Error:', error);
        });
};
