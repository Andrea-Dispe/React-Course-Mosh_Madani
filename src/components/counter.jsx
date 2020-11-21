import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

red25  =  {
  color: 'red',
  fontSize: '25px'
}

green20 = {
  color: 'green',
  fontSize: '20px'

}

  render() {
    return (
      <>
        <span>This State value {this.state.value}</span>
        <span style={this.styles}>Obj reference Stylying</span>
        {/* render inline style */}
        <span style={{color: 'blue', fontSize: '19px', textDecoration: 'underline'}}>Inline Stylying</span>
        {/* render styles dinamycally */}
        <span style={this.state.value > 0 ? this.green20 : this.red25}>Render styles dinamically</span>
        <button>click me</button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
      </>
    );
  }
}

export default Counter;
