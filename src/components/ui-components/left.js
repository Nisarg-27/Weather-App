import "./left.css";
import DisplayBlock from "./displayBlock";
const background = (props) => {
  return (
    <div className="left-box">
        <DisplayBlock city={props.city} temp={props.temp}/>
    </div>
  );
};
export default background;
