import React from "react";

export function Search() {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "left" }}
      className="jumbotron"
    >
        <h3>Book Search</h3>    
    </div>
  );
}

export function Input(props) {
    return ( 
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
    )
}

export function FormBtn(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
    );
  }
  
