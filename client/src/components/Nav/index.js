import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <a className="navbar-item" href="/search" style={ {color:"white", padding: "5px"} }>
        Search
      </a>
      <a className="navbar-item" href="/saved" style={ {color:"white", padding: "5px"} }>
        Saved
      </a>
    </nav>
  );
}

export default Nav;