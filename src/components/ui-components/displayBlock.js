import "./displayBlock.css";
const displayBlock = (props) => {
  var currentdate = new Date();
  var dateTime = currentdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) + " "+ currentdate.toLocaleString('en-us', {  weekday: 'long' }) + " " + currentdate.getDate() + " " + currentdate.toLocaleString('default', { month: 'long' }) + " " + currentdate.getFullYear();
  return (
    <div className="block">
      <div className="temperature-block">
        <span className="temperature">{props.temp}&ordm;</span>
      </div>
      <div className="info-block">
        <span className="city">{props.city}</span>
        <span className="date-time">{dateTime}</span>
      </div>
    </div>
  );
};
export default displayBlock;
