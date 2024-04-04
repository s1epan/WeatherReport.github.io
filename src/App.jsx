import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios({
      url: "https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=Moscow",
    }).then((res) => setData(res.data));
    axios({
      url: "https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=Moscow",
    }).then((res) => setData2(res.data.current.condition.icon));
  }, []);

  const getWeather = (str) => {
    axios({
      url: `https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=${str}`,
    }).then((res) => setData(res.data));
    axios({
      url: `https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=${str}`,
    }).then((res) => setData2(res.data.current.condition.icon));
  };

  return (
    <>
      <Content data={data} func={getWeather} icon={data2} />
    </>
  );
}

export default App;
