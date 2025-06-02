import { useState, createContext, useContext } from "react";

const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState("");

    


    return(
        <WeatherContext.Provider value={{city, setCity }}>
            {children}
        </WeatherContext.Provider>
    )
}