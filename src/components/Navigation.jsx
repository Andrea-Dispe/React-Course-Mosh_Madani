import React from "react";

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <div>
            <p className="badge badge-pill badge-secondary">
              There are {props.counters.length} Counters
            </p>
          </div>
        </a>
      </nav>
    </>
  );
}

export default NavBar;


