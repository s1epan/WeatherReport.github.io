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
  const [bg, setBg] = useState();

  useEffect(() => {
    setLocation(props.data.location);
    setCurrent(props.data.current);
    setForecast(props.forecast);
    setBg(props.bg);
  });

  return (
    <div
      className={
        bg == "Light rain shower" &&
        "Light freezing rain" &&
        "Heavy rain" &&
        "Heavy rain at times" &&
        "Moderate rain" &&
        "Moderate rain at times" &&
        "Light rain" &&
        "Patchy light rain" &&
        "Moderate or heavy rain shower" &&
        "Torrential rain shower"
          ? "contentRain"
          : "content"
      }
      id="content"
      // style={{ background: bg, backgroundSize: "100%" }}
      // style={{ marginRight: spacing + "em" }}
    >
      <Header data={location} func={props.func} />
      <ContentLeftBar
        data={current}
        data2={location}
        icon={props.icon}
        text={props.text}
      />
      <ContentRightBar data3={forecast} />
    </div>
  );
}

export default Content;
