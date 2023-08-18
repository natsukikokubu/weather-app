import React from "react";

export const WeatherForcastCard = ({ data }) => {
  return (
    <div className="card" style={cardStyle}>
      {data ? (
        <div>
          <p>天気: {data.telop}</p>
          <p>最高気温: {data.temperature.max.celsius}</p>
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
