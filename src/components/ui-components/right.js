import { useState } from 'react';
import './right.css';
import SearchBox from './searchBox';
import WeatherInfo from './weatherInfo';
const Right = (props) => {
    const [city, setCity] = useState("");
    const [cloudy, setCloudy] = useState("");
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    const [temp, setTemp] = useState("");
    const [uv, setUv] = useState("");
    const apiResponse = (rep) => {
       setCity(rep.location.name);
       setCloudy(rep.current.cloud);
       setHumidity(rep.current.humidity);
       setWind(rep.current.wind_kph);
       setTemp(rep.current.temp_c);
       setUv(rep.current.uv)
       props.weather(city);
       props.temperature(temp);
    }
   

    return (
        <div className="right-box">
            <div className='inner-right-box'>
                <SearchBox getData={apiResponse}/>
                <WeatherInfo city={city} cloudy={cloudy} humidity={humidity} wind={wind} temp={temp} uv={uv}/>
            </div>
        </div>
    );
}
export default Right;