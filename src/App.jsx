import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    axios({
      url: "https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=Moscow",
    }).then((res) => setData(res.data));
    axios({
      url: "https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=Moscow",
    }).then((res) => setData2(res.data.current.condition.icon));
    axios({
      url: "https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=Moscow",
    }).then((res) => setData3(res.data.forecast.forecastday[0].hour));
  }, []);

  const getWeather = (str) => {
    axios({
      url: `https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=${str}`,
    }).then((res) => setData(res.data));
    axios({
      url: `https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=${str}`,
    }).then((res) => setData2(res.data.current.condition.icon));
    axios({
      url: `https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=${str}`,
    }).then((res) => setData3(res.data.forecast.forecastday[0].hour));
  };

  return (
    <>
      <Content data={data} func={getWeather} icon={data2} forecast={data3} />
    </>
  );
}

export default App;
