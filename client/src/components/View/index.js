import React from "react";

function View(props) {
  return (
    <span className="btn btn-primary" {...props} role="button" tabIndex="0" style={{ margin:"5px"}}>
    </span>
  );
}

export default View;