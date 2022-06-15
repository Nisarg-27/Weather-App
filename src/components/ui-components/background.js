import { useState } from 'react';
import './background.css'
import Left from './left';
import Right from './right'
const Background = (props) => {
    const [city, setCity] = useState("");
    const getWeatherData = (rep) => {
        setCity(rep);
    }
    const [temp, setTemp] = useState("");
    const getTemperature = (rep) => {
        setTemp(rep);
    }
    return (
        <div className="background">
            <Left city={city} temp={temp}/>
            <Right weather={getWeatherData} temperature={getTemperature}/>
        </div>
    );
}
export default Background;