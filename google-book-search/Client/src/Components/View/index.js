import React from "react";

function View(props) {
  return (
    <span className="primary-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default View;
