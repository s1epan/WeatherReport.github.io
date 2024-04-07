import { useEffect } from "react";
import { useState } from "react";
import "./ContentRightBar.css";

function ContentRightBar(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data3);
  });

  return (
    <div className="content-right-bar">
      <div className="forecast">Forecast</div>
      <div className="right-bar-elemets">
        {data
          ? data.map((el) => (
              <div className="forecast-elements" key={el.time_epoch}>
                <p className="forecast-time">{el.time.slice(-5)}</p>
                <img
                  className="forecast-icon"
                  src={el.condition.icon}
                  alt={el.condition.text}
                />
                <p className="forecast-temp">{el.temp_c}°С</p>
                <p className="forecast-text">{el.condition.text}</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default ContentRightBar;
