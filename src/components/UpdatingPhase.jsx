import React, { Component } from "react";

class UpdatingPhase extends Component {
//componentDidUpdate is called after a component is updated which means we have new state or new props
// we can compare the old state/props with the new ones and if there is a change we can make an Ajax request to get new data
// componentDidUpdate takes 2 arguments, the first is the props, and the second one is the state
componentDidUpdate(prevProps, prevState) {
  // console.log('prevProps', prevProps);
  // console.log(this.props)
  // console.log('prevState', prevState)
  if (prevProps.box.value !== this.props.box.value) {
    // Ajax call and get new data from the server
    console.log('counter.value is different')
  }
}

componentWillUnmount() {
  console.log(`Unmounting box number #${this.props.box.id}`)
}

  render() {
    console.log('Updating Phase - Rendered');
    return (
      <>
        <div>{this.props.box.value}</div>
        <button
          onClick={() => this.props.onIncrement(this.props.box)}
          className="btn btn-primary btn-sm m-2"
        >
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.box.id)}>Delete</button>
      </>
    );
  }
}

export default UpdatingPhase;
