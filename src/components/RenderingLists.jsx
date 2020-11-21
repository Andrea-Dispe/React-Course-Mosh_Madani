import React, { Component } from "react";
class RenderingLists extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <>
        <h1>Rendering Lists</h1>
        <ul>
          {/* loop dynamically through an array inside the state and render a li for each item inside the array*/}
          {/* the key property is a uniqu key we must assign to each element in a list to be uniquely identified. This is
          necessary because when the state of this component and the virtual DOM changes, react needs to know exactly
          what element has been changed and where*/}
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </>
    );
  }
}

export default RenderingLists;
