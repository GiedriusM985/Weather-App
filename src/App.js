import {useState, useEffect} from "react";
import CitySelector from "./components/CitySelector";
import Footer from "./components/Footer";
import Main from "./components/Main";
import WeatherCard from "./components/WeatherCard";
import CurrentWeather from "./components/CurrentWeather";
import Grid from "./components/Grid";
import { fetchData, getImage, getMaxValue, getMinValue } from "./utils/api"
import ForecastItem from "./components/ForecasItem/ForecastItem";

const cityArr = [
  {
      city: "Kaunas",
      latitude: 54.898521,
      longitude: 23.903597,
  },
  {
      city: "Vilnius",
      latitude: 54.687157,
      longitude: 25.279652,
  },
  {
      city: "Klaipėda",
      latitude: 55.703297,
      longitude: 21.144279,
  },
  {
      city: "Šiauliai",
      latitude: 55.93333,
      longitude: 23.31667,
  },
  {
      city: "Panevėžys",
      latitude: 55.72926,
      longitude: 24.34861,
  },
  {
      city: "Biržai",
      latitude: 56.19830,
      longitude: 24.76082,
  },
  {
      city: "Telšiai",
      latitude: 55.98139,
      longitude: 22.24722,
  },
  {
      city: "Alytus",
      latitude: 54.40111,
      longitude: 24.03625,
  },
  {
      city: "Ignalina",
      latitude: 55.34280,
      longitude: 26.16478,
  },
  {
      city: "Druskininkai",
      latitude: 54.01667,
      longitude: 23.96667,
  },
];

function App() {
  const [data, setData] = useState(null);
  const [ selCity, setSelCity ] = useState("Kaunas");
  
  useEffect(() => {  
    cityArr.map((el) => {
      if(selCity === el.city) {
        fetchData(el.latitude, el.longitude, setData);        
      }         
    })          
}, [selCity]);

console.log(data); 


  return (
    <>
      <Main>
        <WeatherCard>
          <CitySelector city = {selCity} setCity = {setSelCity}/>
          {data ? <CurrentWeather 
              temp = {data.current.temperature_2m}
              city = {selCity}
              day = {data.current.time.slice(0,10)}
              wind = {data.current.wind_speed_10m}
              prec = {data.current.precipitation}
              hum = {data.current.relative_humidity_2m}
              unit = {data.current_units.temperature_2m} 
              imgUrl = {getImage(  data.current.precipitation,  data.current.relative_humidity_2m)}          
              />
               : console.log("nodata")}
        <Grid>
            {data ?             
            <>            
              <ForecastItem 
                day = {data.hourly.time[24].slice(0, 10)}
                imgUrl = {getImage(  getMaxValue (data.hourly.precipitation.slice(0, 24)),  getMaxValue (data.hourly.relative_humidity_2m.slice(0, 24)))}
                maxTemp = {getMaxValue(data.hourly.temperature_2m.slice(0, 24))}
                minTemp = {getMinValue(data.hourly.temperature_2m.slice(0, 24))} 
                units = {data.hourly_units.temperature_2m}               
              />
               <ForecastItem 
                day = {data.hourly.time[48].slice(0, 10)}
                imgUrl = {getImage(  getMaxValue (data.hourly.precipitation.slice(25, 48)),  getMaxValue (data.hourly.relative_humidity_2m.slice(25, 48)))}
                maxTemp = {getMaxValue(data.hourly.temperature_2m.slice(25, 48))}
                minTemp = {getMinValue(data.hourly.temperature_2m.slice(25, 48))} 
                units = {data.hourly_units.temperature_2m}               
              />
              <ForecastItem 
                day = {data.hourly.time[72].slice(0, 10)}
                imgUrl = {getImage(  getMaxValue (data.hourly.precipitation.slice(49, 72)),  getMaxValue (data.hourly.relative_humidity_2m.slice(49, 72)))}
                maxTemp = {getMaxValue(data.hourly.temperature_2m.slice(49, 72))}
                minTemp = {getMinValue(data.hourly.temperature_2m.slice(49, 72))} 
                units = {data.hourly_units.temperature_2m}               
              />
              <ForecastItem 
                day = {data.hourly.time[96].slice(0, 10)}
                imgUrl = {getImage(  getMaxValue (data.hourly.precipitation.slice(73, 96)),  getMaxValue (data.hourly.relative_humidity_2m.slice(73, 96)))}
                maxTemp = {getMaxValue(data.hourly.temperature_2m.slice(73, 96))}
                minTemp = {getMinValue(data.hourly.temperature_2m.slice(73, 96))} 
                units = {data.hourly_units.temperature_2m}               
              />
              <ForecastItem 
                day = {data.hourly.time[120].slice(0, 10)}
                imgUrl = {getImage(  getMaxValue (data.hourly.precipitation.slice(97, 120)),  getMaxValue (data.hourly.relative_humidity_2m.slice(97, 120)))}
                maxTemp = {getMaxValue(data.hourly.temperature_2m.slice(97, 120))}
                minTemp = {getMinValue(data.hourly.temperature_2m.slice(97, 120))} 
                units = {data.hourly_units.temperature_2m}               
              />

              
              </>
              
            
             : console.log("nodata")
            }
        </Grid>           
        </WeatherCard>
      </Main>
      <Footer/>
    </>
      

      
  )
}

export default App;
