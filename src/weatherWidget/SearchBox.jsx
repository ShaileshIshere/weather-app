import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from "react";

export default function SearchBox({ updatedInfo }) {
    const [city, setCity] = useState("");
    const [err, setErr] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "81dc67e996ed388337accdf434a860fc";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const result = {
                city: jsonResponse.name,
                country: jsonResponse.sys.country,
                humidity: jsonResponse.main.humidity,
                temp: jsonResponse.main.temp,
                maxTemp: jsonResponse.main.temp_max,
                weather: jsonResponse.weather[0].description,
                windSpeed: jsonResponse.wind.speed,
            }
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }    
    }

    const handleChange = (event) => {
        setCity(event.target.value);
        setErr(false); // Reset error state when user starts typing
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newInfo = await getWeatherInfo();
            updatedInfo(newInfo);
            setCity(""); // Clear input field after a successful search
        } catch (error) {
            setErr(true); // Set error state if there is an error
        }
    }

    return (
        <>
            <h3>Enter your city here</h3>
            {err && <h3><b>No such place exists in our API</b></h3>}
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="city name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange} 
                />
                &nbsp; &nbsp;
                <button type="submit"><SearchOutlinedIcon /></button>
            </form>
        </>
    );
}
