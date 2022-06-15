import "./searchBox.css";
import searchIcon from "./magnifying-glass.png";
import { useState } from "react";
const SearchBox = (props) => {
  const cityData = [
    {
      id: 1,
      city: 'Pune',
    },
    {
      id:2,
      city: 'Mumbai',
    },
    {
      id:3,
      city: 'Banglore',
    },
    {
      id:4,
      city: 'Delhi',
    },
    
  ]

  const [city, setCity] = useState("");
  const cityHandler = (e) => {
    setCity(e.target.value);
  }
  const FetchWeatherInfo = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=128f6ca1475240bc9ea132605221506&q=${city}&aqi=no`);
    const data = await response.json();
    props.getData(data);
  }
  return (
    <div className="search-box">
      <div className="box">
        <form onSubmit={FetchWeatherInfo}>
        <input type="text" placeholder="Enter City" value={city} onChange={cityHandler}/>
        <button><img src={searchIcon} alt=""/></button>
        </form>
      </div>
      <div className="city-box">
      {cityData.map((element) => {
        return (
          <span className="city">{element.city}</span>
        );
      })}
      </div>      
    </div>
  );
};
export default SearchBox;
