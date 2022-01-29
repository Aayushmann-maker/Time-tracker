import React, { useReducer } from "react";
import Image from "../images/image-jeremy.png";

const intitialActiveState = {
  activeDaily: false,
  activeWeekly: true,
  activeMonthly: false,
};

const activeReducer = (state, action) => {
  if (action.type === "daily") {
    return {
      activeDaily: true,
      activeWeekly: false,
      activeMonthly: false,
    };
  }
  if (action.type === "weekly") {
    return {
      activeDaily: false,
      activeWeekly: true,
      activeMonthly: false,
    };
  }
  if (action.type === "monthly") {
    return {
      activeDaily: false,
      activeWeekly: false,
      activeMonthly: true,
    };
  }

  return intitialActiveState;
};

const Report = props => {
  const [activeState, dispatch] = useReducer(
    activeReducer,
    intitialActiveState
  );

  const dailyChangeHandler = () => {
    props.onChange("daily");
    dispatch({ type: "daily" });
  };
  const weeklyChangeHandler = () => {
    props.onChange("weekly");
    dispatch({ type: "weekly" });
  };
  const monthlyChangeHandler = () => {
    props.onChange("monthly");
    dispatch({ type: "monthly" });
  };

  return (
    <div className="report">
      <div className="report-person">
        <figure>
          <img src={Image} alt="Person" />
        </figure>
        <div className="report-description">
          <h1 className="report-heading">
            <span className="report-heading--sub">Report For</span>
            <span className="report-heading--main">Jeremy Robson</span>
          </h1>
        </div>
      </div>
      <div className="report-type">
        <button
          className={activeState.activeDaily ? "active" : ""}
          onClick={dailyChangeHandler}
        >
          Daily
        </button>
        <button
          className={activeState.activeWeekly ? "active" : ""}
          onClick={weeklyChangeHandler}
        >
          Weekly
        </button>
        <button
          className={activeState.activeMonthly ? "active" : ""}
          onClick={monthlyChangeHandler}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default Report;
