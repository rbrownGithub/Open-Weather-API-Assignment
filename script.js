document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const zipCode = document.getElementById('zipInput').value.trim();
    const apiKey = '01ebbb3e2c6ad89741edcd2540231cc3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Check console for API response
            
            const cityName = data.name;
            const currentDate = new Date().toLocaleDateString();
            const currentTemp = data.main.temp;
            const currentConditions = data.weather[0].description;
            const tempHigh = data.main.temp_max;
            const tempLow = data.main.temp_min;

            const weatherInfoHtml = `
                <h2>${cityName}</h2>
                <p>Date: ${currentDate}</p>
                <p>Temperature: ${currentTemp} &#8457;</p>
                <p>Conditions: ${currentConditions}</p>
                <p>High/Low: ${tempHigh} &#8457; / ${tempLow} &#8457;</p>
            `;

            document.getElementById('weatherInfo').innerHTML = weatherInfoHtml;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
});
