import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Clock() {
    const [localTime, setLocalTime] = useState(new Date());
    const [apiTime, setApiTime] = useState(new Date());

    useEffect(() => {
        // Оновлення часу кожну секунду
        const localTimeIntervalId = setInterval(() => {
            setLocalTime(new Date());
        }, 1000);

        // Отримання поточного часу з API та оновлення кожну секунду
        const fetchCurrentTime = async () => {
            try {
                const response = await axios.get('https://worldtimeapi.org/api/ip');
                const serverTime = new Date(response.data.utc_datetime);
                setApiTime(serverTime);
            } catch (error) {
                console.error('Помилка при отриманні часу з API:', error);
            }
        };

        const apiTimeIntervalId = setInterval(() => {
            fetchCurrentTime();
        }, 1000);

        // Очищення інтервалів при виході з компоненту
        return () => {
            clearInterval(localTimeIntervalId);
            clearInterval(apiTimeIntervalId);
        };

        // Викликати отримання часу з API при маунтінгу компоненту
        fetchCurrentTime();
    }, []);

    const formattedLocalTime = localTime.toLocaleTimeString();
    const formattedApiTime = apiTime.toLocaleTimeString();

    return (
        <div>
            <h1>Локальний час:</h1>
            <p>{formattedLocalTime}</p>
            <h1>Час з API:</h1>
            <p>{formattedApiTime}</p>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Clock />
        </div>
    );
}

export default App;
