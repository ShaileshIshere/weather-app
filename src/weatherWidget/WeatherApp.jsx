import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        country: "",
        humidity: 0,
        temp: 0,
        maxTemp: 0,
        weather: "",
        windSpeed: 0,
    });

    let updatedInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h2>Weather App by xlence</h2>
            <SearchBox updatedInfo={updatedInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}