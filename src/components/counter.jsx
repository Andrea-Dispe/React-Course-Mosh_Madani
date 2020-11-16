import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
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
        <span>This State Count {this.state.count}</span>
        <span style={this.styles}>Obj reference Stylying</span>
        {/* render inline style */}
        <span style={{color: 'blue', fontSize: '19px', textDecoration: 'underline'}}>Inline Stylying</span>
        {/* render styles dinamycally */}
        <span style={this.state.count > 0 ? this.green20 : this.red25}>Render styles dinamically</span>
        <button>click me</button>
      </>
    );
  }
}

export default Counter;
