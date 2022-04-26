import React from "react";
import Card from "./Card";

const CardContainer = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((cardData) => {
        return <Card cardData={cardData} />;
      })}
    </div>
  );
};

export default CardContainer;
