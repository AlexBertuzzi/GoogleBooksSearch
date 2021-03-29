import React from "react";

function Delete(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0" style={{ margin:"5px"}}>
      ✗Delete
    </span>
  );
}

export default Delete;
