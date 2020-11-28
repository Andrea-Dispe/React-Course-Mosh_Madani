import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const {onDelete, onIncrement, counters, onReset, onDecrement} = this.props;
    return (
      <>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >
          Reset
        </button>

        {counters.map((counter) => (
          <div key={counter.id} style={{ borderBottom: "3px solid black" }}>
            <Counter
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </div>
        ))}
      </>
    );
  }
}

export default Counters;
