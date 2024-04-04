import { useEffect } from "react";
import { useState } from "react";
import ContentLeftBar from "../ContentLeftBar/ContentLeftBar";
import ContentRightBar from "../ContentRightBar/ContentRightBar";
import Header from "../Header/Header";
import "./Content.css";

function Content(props) {
  const [location, setLocation] = useState([]);
  const [current, setCurrent] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    setLocation(props.data.location);
    setCurrent(props.data.current);
    setForecast(props.forecast);
  });

  return (
    <div className="content">
      <Header data={location} func={props.func} />
      <ContentLeftBar data={current} data2={location} icon={props.icon} />
      <ContentRightBar data3={forecast} />
    </div>
  );
}

export default Content;
