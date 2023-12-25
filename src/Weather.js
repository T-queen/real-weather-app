import React, { useState, useEffect, useCallback } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(props.defaultCity || "New York"); // Initialize city with a default value
    //const cityRef = useRef();

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000), // Create a new Date object
            description: response.data.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }

    const search = useCallback(() => {
        if (!city) {
            console.log(`city is not defined`);
            return;
        }
        const apiKey = "51b5da0a2a1e91e24fe0fc7c0137153f";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios
        .get(apiUrl)
        .then((response) => {
            handleResponse(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [city]); // add a city to the dependency array

    useEffect(() => {
        search();
    }, [search]);

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input
                            type="search"
                            placeholder="Enter a city..."
                            className="form-control"
                            autoFocus="on"
                            onChange={handleCityChange}
                        />
                    </div>
                    <div className="col-3">
                        <input
                            type="submit"
                            value="Search"
                            className="btn btn-primary w=100"
                        />
                    </div>
                </div>
            </form>
            {weatherData ? (
                <WeatherInfo data={weatherData} />
            ) : (
                "Loading..."
            )}
        </div>
    );
}