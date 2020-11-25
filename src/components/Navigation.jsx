import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
            <div>
              <p className="badge badge-pill badge-secondary">
                There are {this.props.counters.length} Counters
              </p>
            </div>
          </a>
        </nav>
      </>
    );
  }
}

export default Navigation;
