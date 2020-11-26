import React, { Component } from "react";
import UpdatingPhase from "./UpdatingPhase";
class MountingPhase extends Component {
  // LIFE CYCLE HOOKS
  // in the mounting life cycle phase there are 3 main lifecycle hooks, constructor, render, componentDidMount
  // The constructor is called once and it is the right place to initalize the properties in this class
  // remember to pass the props to the constructor and to the super parent component.
  state = {
    boxes: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (id) => {
    console.log("id is ", id);
    console.log("the state is ", this.state);
    const boxes = this.state.boxes.filter((box) => box.id !== id);
    // in the setState remeber to pass the new array inside an object
    this.setState({ boxes });
  };

  constructor(props) {
    super(props);
    console.log("MountingPhase - constructor");
    // constructor is a good lace where to set the state from the passed props
    // this.state = this.props;
  }

  // componentDidMount is called after the component is rendered in the DOM and it is the perfect place to make api calls
  componentDidMount() {
    console.log("MountingPhase - mounted");
    // Ajax call
    // this.setState({  })
  }//ccc

  // render is called after the constructor but before the componentDidMount
  render() {
    console.log("MountingPhase - rendered");
    return (
      <>
        {this.state.boxes.map((b) => (
          <UpdatingPhase
            box={b}
            key={b.id}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        ))}
      </>
    );
  }

  handleIncrement = (box) => {
      const boxes = [...this.state.boxes];
      const boxIndex = boxes.indexOf(box);
      boxes[boxIndex] = {...box};
      boxes[boxIndex].value++;
      this.setState({ boxes })
  }
}

export default MountingPhase;
