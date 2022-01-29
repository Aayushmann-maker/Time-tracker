import React from "react";
import ellipse from "../images/icon-ellipsis.svg";
import work from "../images/icon-work.svg";

const Activity = props => {
  const { title, previous, current, color } = props;
  const currentTime = `${current}hrs`;
  const previousTime = `Last Week-${previous}hrs`;

  return (
    <div
      className="activity"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="activity__icon"></div>
      <div className="activity__description">
        <div className="activity-heading">
          <h2>{title}</h2>
          <figure>
            <img src={ellipse} alt="Icon" />
          </figure>
        </div>
        <div className="activity__time">
          <h3>{currentTime}</h3>
          <p>{previousTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
