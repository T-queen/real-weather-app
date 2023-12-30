import React, { useState, useEffect } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates])


    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true)
    }

    function load() {
    let apiKey = "3fb588a531a269cb84571a72237d8729";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index){
                     if (index < 6) {
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}    
                </div>
            </div>
        );
    
    } else {
        load();
    
    return null;
        
    }

}

   