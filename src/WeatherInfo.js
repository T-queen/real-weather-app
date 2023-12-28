import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
    <ul>
        <li><FormattedDate date={props.data.date} /></li>
        <li className="text-capitalize" mb-4="true">{props.data.description}</li>
    </ul>
    <div className="row" mt-5="true">
        <div className="col-6">
            <div className="clearfix" style={{ display: 'flex', alignItems: 'start' }}>
                <div className="float-left">
                <WeatherIcon code={props.data.icon} />
                </div>
                  
            
            <div className="float-left">
            <span className="temperature">{Math.round(props.data.temperature)}</span>
            <span className="unit">°C</span>
            </div>
            </div>
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation 15% </li>
                <li>Humidity {props.data.humidity}%</li>
                <li>Wind {props.data.wind}km/hr</li>
            </ul>
        </div>
    </div>
        </div>
    );
    
}