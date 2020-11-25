import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {

  render() {
    return (
      <>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.handleReset}
        >
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <div key={counter.id} style={{ borderBottom: "3px solid black" }}>
            <Counter
              counter={counter}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
            />
          </div>
        ))}
      </>
    );
  }
}

export default Counters;
