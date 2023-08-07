import { render } from "@testing-library/react";
import "./App.css";
import axios from "axios";
import { Select } from "./DropDown";
import { useEffect, useState } from "react";
import { Title } from "./Title";
import { Button } from "./Button";
import { WeatherForcastCard } from "./WeatherForcastCard";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [placeName, setPlaceName] = useState("");
  const apiURL = "https://weather.tsukumijima.net/api/forecast";

  const options = [
    { label: "東京", id: "130010" },
    { label: "大阪", id: "270000" },
    { label: "栃木", id: "090010" },
  ];

  const placeNameChange = (selectedOption) => {
    // 選択された地域の値を取得
    const selectedId = selectedOption.id;
    // placeNameステート変数を更新
    setPlaceName(selectedId);
  };
  //
  //const placeNameChange = () => {
  //return setPlaceName(e.target.value);
  //};
  //

  const handleChangeSearchButton = () => {
    axios
      .get(apiURL, {
        params: {
          city: placeName,
        },
      })
      .then((response) => {
        //APIデータがforcast[0]が今日の天気、forcast[1]が明日の天気...となっており、明日の天気を表示させたいためforcast[1]とした
        setWeatherData(response.data.forecasts[1]);
      })
      .catch((error) => {
        console.error("天気予報の取得に失敗しました:", error);
        setWeatherData(null);
      });
  };

  return (
    <div>
      <Title text="明日の天気" />
      <div>
        <Select
          options={options}
          type="text"
          placeholder="地域セレクトしてください"
          value={options.find((option) => option.id === placeName)}
          onChange={placeNameChange}
        />
      </div>
      <div>
        <Button label="検索" onClick={handleChangeSearchButton} />
      </div>
      <WeatherForcastCard data={weatherData} />
    </div>
  );
}

export default App;
