import React from "react";

const WeatherForcastCard = ({ Data }) => {
  return (
    <div className="card" style={cardStyle}>
      {Data ? (
        <div>
          <p>天気: {Data.telop}</p>
          <p>最高気温: {Data.temperature.max.celsius}</p>
        </div>
      ) : (
        <p>天気情報を取得中..</p>
      )}
    </div>
  );
};
const cardStyle = {
  width: "450px",
  height: "300px",
  paddingTop: "30px",
  paddingLeft: "30px",
  margin: "auto",
  fontSize: "24px",
  backgroundColor: "#87ceeb",
  borderRadius: "20px",
};

export default WeatherForcastCard;
