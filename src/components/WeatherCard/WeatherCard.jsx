import React from "react";
import './style.css'

const WeatherCard = ({children}) => {
    return (
        <div className="weather-card">
                {children}
        </div>
    )
}

export default WeatherCard;