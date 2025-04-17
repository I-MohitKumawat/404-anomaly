import React from "react";
import "./Cards.css";

import Card from "../Card/Card";

const cardsData = [
  {
    title: "Stress",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "70",
    png: () => <span style={{ fontSize: '1.5rem' }}>😰</span>,
    series: [
      {
        name: "Stress",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Fitness",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "80",
    png: () => <span style={{ fontSize: '1.5rem' }}>🏃‍♂️</span>,
    series: [
      {
        name: "Fitness",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Study Stress",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "60",
    png: () => <span style={{ fontSize: '1.5rem' }}>📚</span>,
    series: [
      {
        name: "Study",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => (
        <div className="parentContainer" key={id}>
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            series={card.series}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
