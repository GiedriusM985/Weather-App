import React from "react";
import Text from "../Text";
import Image from "../Image";

import "./style.css"

const CurrentWeather = ( {temp, city, imgUrl, unit, day, prec, hum, wind}) => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(day);  
    
    return (
        <div className="current-weather-wrapper">
            <div className="current-weather">
                <div className="text">                    
                    <Text item="city">{city}</Text>
                    <Image imgUrl = {imgUrl}/>
                </div>
                <div className="text">
                    <Text item="temp">{temp}</Text>
                    <Text item="temp">{unit}</Text> 
                </div>
                <Text className="text" item="day">{dayNames[date.getDay()]}</Text>
            </div>
            <div className="conditions">
                <Text item="small">Precipitation: {prec} mm</Text>
                <Text item="small">Humidity: {hum} %</Text>
                <Text item="small">Wind: {wind} m/s</Text>
            </div>
        </div>
    )
        

}

export default CurrentWeather;