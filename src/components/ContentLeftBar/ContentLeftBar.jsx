import { useEffect } from "react";
import { useState } from "react";
import "./ContentLeftBar.css";

function ContentLeftBar(props) {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    setData(props.data);
    setData2(props.data2);
  });

  return (
    <div className="content-left-bar">
      <div className="left-bar-elemets">
        <img className="left-bar-img" src={data ? props.icon : ""} alt="" />
        <div className="left-bar-temp">{data ? data.feelslike_c : "NAN"}°С</div>
        <div className="left-bar-location-data">
          {data2 ? data2.name : "NF"} | {data2 ? data2.localtime : "NF"}
        </div>
      </div>
    </div>
  );
}

export default ContentLeftBar;
