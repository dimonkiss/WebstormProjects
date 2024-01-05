// Збережіть цей код у файлі script.js

const apiKey = 'b5aaf47665005682232dd78931037090';
const city = 'Rivne';
const nearbyCities = ['Lutsk', 'Ternopil', 'Zhytomyr']; // Замініть назвами бажаних міст

async function getWeather() {
    try {
        // Отримання погоди на сьогодні
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        // Виведення короткої інформації на сторінку
        document.getElementById('date').innerText = new Date().toLocaleDateString();
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.getElementById('description').innerText = data.weather[0].description;
        document.getElementById('temperature').innerText = `Температура: ${data.main.temp} °C`;
        document.getElementById('feels-like').innerText = `Відчувається як: ${data.main.feels_like} °C`;
        document.getElementById('sunrise').innerText = `Схід сонця: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
        document.getElementById('sunset').innerText = `Захід сонця: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;

        const dayLength = new Date((data.sys.sunset - data.sys.sunrise) * 1000);
        document.getElementById('day-length').innerText = `Тривалість дня: ${dayLength.getUTCHours()} год. ${dayLength.getUTCMinutes()} хв.`;

        // Отримання щочотирьохгодинного прогнозу
        const hourlyResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const hourlyData = await hourlyResponse.json();

        // Виведення щочотирьохгодинного прогнозу на сторінку
        const hourlyForecastInfo = document.getElementById('hourly-forecast-info');
        hourlyForecastInfo.innerHTML = '';

        const hourlyForecastTable = document.getElementById('hourly-forecast-table');
        hourlyForecastTable.innerHTML = '<thead><tr><th>Час</th><th>Іконка</th><th>Опис</th><th>Температура</th><th>Відчувається як</th><th>Вітер</th></tr></thead><tbody>';

        for (let i = 0; i < hourlyData.list.length; i += 4) {
            const forecast = hourlyData.list[i];
            const hour = new Date(forecast.dt * 1000).getHours();
            const icon = forecast.weather[0].icon;
            const description = forecast.weather[0].description;
            const temperature = forecast.main.temp;
            const feelsLike = forecast.main.feels_like;
            const windSpeed = forecast.wind.speed;
            const windDirection = forecast.wind.deg;

            const hourInfo = document.createElement('tr');
            hourInfo.innerHTML = `
                <td>${hour}:00</td>
                <td><img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon"></td>
                <td>${description}</td>
                <td>${temperature} °C</td>
                <td>${feelsLike} °C</td>
                <td>${windSpeed} м/с, ${windDirection}°</td>
            `;
            hourlyForecastTable.appendChild(hourInfo);
        }
        hourlyForecastTable.innerHTML += '</tbody>';

        // Отримання прогнозу для найближчих міст
        const nearbyCitiesInfo = document.getElementById('nearby-cities-info');
        nearbyCitiesInfo.innerHTML = '';

        for (const nearbyCity of nearbyCities) {
            const cityResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nearbyCity}&appid=${apiKey}&units=metric`);
            const cityData = await cityResponse.json();

            const cityIcon = cityData.weather[0].icon;
            const cityTemperature = cityData.main.temp;

            const cityInfo = document.createElement('div');
            cityInfo.innerHTML = `
                <p>${nearbyCity}</p>
                <img src="https://openweathermap.org/img/w/${cityIcon}.png" alt="Weather Icon">
                <p>Температура: ${cityTemperature} °C</p>
            `;
            nearbyCitiesInfo.appendChild(cityInfo);
        }

        // Отримання 5-денного прогнозу
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const forecastData = await forecastResponse.json();

        // Виведення короткого прогнозу на кожен з п'яти днів
        const shortForecastInfo = document.getElementById('short-forecast-info');
        shortForecastInfo.innerHTML = '';

        // Фільтрація результатів для вибору лише прогнозу на п'ять днів
        const fiveDayForecast = forecastData.list.filter(item => new Date(item.dt * 1000).getHours() === 12);

        for (let i = 0; i < fiveDayForecast.length; i++) {
            const dayForecast = fiveDayForecast[i];
            const dayOfWeek = new Date(dayForecast.dt * 1000).toLocaleDateString('en', { weekday: 'long' });
            const date = new Date(dayForecast.dt * 1000).toLocaleDateString();
            const icon = dayForecast.weather[0].icon;
            const temperature = dayForecast.main.temp;
            const description = dayForecast.weather[0].description;

            const dayInfo = document.createElement('div');
            dayInfo.innerHTML = `
                <p>${dayOfWeek}</p>
                <p>${date}</p>
                <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
                <p>Температура: ${temperature} °C</p>
                <p>${description}</p>
                <button onclick="getHourlyForecast(${dayForecast.dt})">Погодинний прогноз</button>
            `;
            shortForecastInfo.appendChild(dayInfo);
        }
    } catch (error) {
        console.error('Помилка при отриманні погодової інформації:', error.message);
    }
}

async function getHourlyForecast(dayTimestamp) {
    try {
        const hourlyResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const hourlyData = await hourlyResponse.json();

        // Виведення погодинного прогнозу для обраного дня
        const hourlyForecastInfo = document.getElementById('hourly-forecast-info');
        hourlyForecastInfo.innerHTML = '';

        // Фільтрація результатів для вибору прогнозу на обраний день та обрані години
        const selectedDayForecast = hourlyData.list.filter(item => new Date(item.dt * 1000).getDate() === new Date(dayTimestamp * 1000).getDate() && [0, 3, 6, 9, 12, 15, 18, 21].includes(new Date(item.dt * 1000).getHours()));

        for (let i = 0; i < selectedDayForecast.length; i++) {
            const forecast = selectedDayForecast[i];
            const hour = new Date(forecast.dt * 1000).getHours();
            const icon = forecast.weather[0].icon;
            const description = forecast.weather[0].description;
            const temperature = forecast.main.temp;
            const feelsLike = forecast.main.feels_like;
            const windSpeed = forecast.wind.speed;
            const windDirection = forecast.wind.deg;

            const hourInfo = document.createElement('div');
            hourInfo.innerHTML = `
                <p>${hour}:00</p>
                <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
                <p>${description}</p>
                <p>Температура: ${temperature} °C</p>
                <p>Відчувається як: ${feelsLike} °C</p>
                <p>Вітер: ${windSpeed} м/с, ${windDirection}°</p>
            `;
            hourlyForecastInfo.appendChild(hourInfo);
        }
    } catch (error) {
        console.error('Помилка при отриманні погодової інформації:', error.message);
    }
}
