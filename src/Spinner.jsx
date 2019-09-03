import React from "react";
import PropTypes from "prop-types";

const Spinner = props => {
  const { text } = props;
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{text}</div>
    </div>
  );
};

Spinner.defaultPropTypes = {
  text: "default string"
};
Spinner.propTypes = {
  text: PropTypes.string.isRequired
};

export default Spinner;
