import React from "react";

const Card = ({ cardData }) => {
  const coresLength = cardData.rocket.first_stage.cores.length;
  return (
    <div className="card">
      <img src={cardData.links.mission_patch_small} alt="Logo" />

      <div className="name">
        {cardData.mission_name} #{cardData.flight_number}
      </div>

      <div className="cardDetails">
        <div className="cardTitle">Mission Id : </div>
        <div className="value">
          {cardData.mission_id.map((mi, i) => {
            return <span> {mi}</span>;
          })}
        </div>
      </div>

      <div className="cardDetails dflex">
        <div className="cardTitle ">Launch Year : </div>
        <div className="value">{cardData.launch_year}</div>
      </div>

      <div className="cardDetails dflex">
        <div className="cardTitle ">Successful Launch : </div>
        <div className="value">{cardData.launch_success ? "True" : "False"}</div>
      </div>

      <div className="cardDetails dflex">
        <div className="cardTitle">Successful landing : </div>
        <div className="value">{cardData.rocket.first_stage.cores[coresLength - 1].land_success ? "True" : "False"}</div>
      </div>
    </div>
  );
};

export default Card;
