import React, { Component } from "react";
class HandlingEvents extends Component {

  state = {};
  // While the this keyword in objects methods reference the object itself or whatever is on the left of the dot,
  // in standalone functions like the handleIncrement() the this keyword is the window object, or undefined in strict mode.
  // There are 2 ways to force the this inside the function to reference the HandlingEvent object: using Bind and arrow functions

  // BIND
  // since functions are objects they have native methods like bind.
  // binding events handler in a class must be done inside the constructor and it needs to have the parent's constructor (super)
  // if the class extends to it.
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this)
  }
  handleIncrement() {
    console.log('increments clicked using constructor and .bind', this)
  }

  // arrow functions do not rebind the this keyword but they inherit from the object that contains them
  handleIncrementArrow = (id) => {
    console.log('increment clicked using an arrow function', this)
    console.log(id)
  }

  render() {
    return (
      <>
        <h1>Handling Events</h1>
        {/* All React elements have properties that are based on standard DOM EVENTS like onClick */}
        <button onClick={this.handleIncrement}>Increment with constructor and binding</button>
        <button onClick={this.handleIncrementArrow}>Increment with arrow function</button>
        {/* to pass arguments to event functions we need to use inline function, so instead of referencing
        handleIncrementArrow, we have an inline function and pass something in it */}
        <button onClick={() => this.handleIncrementArrow({id:1})}>ID</button>
      </>
    );
  }
}

export default HandlingEvents;
