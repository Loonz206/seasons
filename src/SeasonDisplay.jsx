import "./SeasonDisplay.css";
import React from "react";
import PropTypes from "prop-types";

// Using a config to end repeative code like two ternaries that techincally serve the same idea
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Brr, it's chilly",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  let value;
  if (month > 2 && month < 9) {
    value = lat > 0 ? "summer" : "winter";
  } else {
    value = lat > 0 ? "winter" : "summer";
  }
  return value;
};

const SeasonDisplay = props => {
  const { lat } = props;
  const month = new Date().getMonth();
  const season = getSeason(lat, month);
  const { text, iconName } = seasonConfig[season];
  return (
    // using dynamic values in classNames ala react
    <div className={`season-display ${season}`}>
      <i className={`icon-left icon massive ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right icon massive ${iconName}`} />
    </div>
  );
};

SeasonDisplay.defaultPropTypes = {
  lat: 0
};
SeasonDisplay.propTypes = {
  lat: PropTypes.number.isRequired
};

export default SeasonDisplay;
