import React from "react";
import { useState } from "react";
import './style.css'

const CitySelector = ({city, setCity}) => {
  
    return (
        <>
        <select className="select-box" 
            city = {city}
            onChange={(e) => setCity(e.target.value)}>
            <option value="Kaunas">Kaunas</option>
            <option value="Panevėžys">Panevėžys</option>
            <option value="Klaipėda">Klaipėda</option>
            <option value="Šiauliai">Šiauliai</option>
            <option value="Vilnius">Vilnius</option>
            <option value="Biržai">Biržai</option>
            <option value="Druskininkai">Druskininkai</option>
            <option value="Ignalina">Ignalina</option>
            <option value="Alytus">Alytus</option>
            <option value="Telšiai">Telšiai</option>
            
        </select>
        
    </>
        
    )
    
}

export default CitySelector;
