import React from "react";
import Image from "../Image";
import Text from "../Text";
import "./style.css"

const ForecastItem = ({children, day, imgUrl, maxTemp, minTemp, units}) => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(day);
    
    return(
    <div className="forecast-item">
        <Text item = "small">{dayNames[date.getDay()].slice(0,3)}</Text>
        <Image imgUrl = {imgUrl}/>
        <Text item="small">{maxTemp} {units} / {minTemp} {units}</Text>
    </div>
    )
}

export default ForecastItem;