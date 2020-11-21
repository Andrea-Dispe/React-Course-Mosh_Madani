import React, { Component } from 'react';
class UpdateState extends Component {
  state = {
    count: 0
   }
  handleIncrement = () => {
    // in react one cannot directly change the state, but it needs to be updated by the setState function
    // setState is a metod we inherit from the base component in React
    // the property in the setState method will merge or override the one in the state object
    this.setState({ count: this.state.count + 1})
  }

  render() {
    return (
      <>
        <h1>Update the State</h1>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </>
    );
  }
}

export default UpdateState;