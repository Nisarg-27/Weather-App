import "./weatherInfo.css";
const WeatherInfo = (props) => {
   
  return (
    <>
      <span className="head">Weather Details</span>

      <div className="weather-info-box">
        <div className="info-box">
          <span className="info">Cloudy</span>
          <span className="value">{props.cloudy}%</span>
        </div>
        <div className="info-box">
          <span className="info">Humidity</span>
          <span className="value">{props.humidity}%</span>
        </div>
        <div className="info-box">
          <span className="info">Wind</span>
          <span className="value">{props.wind}km/h</span>
        </div>
        <div className="info-box">
          <span className="info">UV</span>
          <span className="value">{props.uv}</span>
        </div>
      </div>
    </>
  );
};
export default WeatherInfo;
