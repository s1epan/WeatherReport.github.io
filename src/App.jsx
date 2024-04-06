import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState();
  const [data6, setData6] = useState();
  const [data7, setData7] = useState();

  useEffect(() => {
    axios({
      url: "https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=Moscow",
    }).then((res) => setData(res.data));

    axios({
      url: "https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=Moscow",
    }).then((res) => setData2(res.data.current.condition.icon));

    axios({
      url: "https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=Moscow",
    }).then((res) => setData7(res.data.current.condition.text));

    axios({
      url: "https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=Moscow",
    }).then((res) => setData3(res.data.forecast.forecastday[0].hour));

    // ================

    axios({
      url: "https://www.weatherapi.com/docs/conditions.json",
    }).then((res) => setData4(res.data.map((el) => el.day)));
  }, []);

  const getWeather = async (str) => {
    await axios({
      url: `https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=${str}`,
    }).then((res) => setData(res.data));

    await axios({
      url: `https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=${str}`,
    }).then((res) => setData2(res.data.current.condition.icon));

    await axios({
      url: `https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=${str}`,
    }).then((res) => setData7(res.data.current.condition.text));

    await axios({
      url: `https://api.weatherapi.com/v1/forecast.json?key=023811ea79b1412382c150834232609&q=${str}`,
    }).then((res) => setData3(res.data.forecast.forecastday[0].hour));
  };

  return (
    <>
      <Content
        data={data}
        func={getWeather}
        icon={data2}
        text={data7}
        forecast={data3}
        bg={data7}
      />
    </>
  );
}

export default App;
