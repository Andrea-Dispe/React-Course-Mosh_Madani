import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
  };
  styles = {
    color: 'orange',
    fontSize: '22px'
  }

  red25  =  {
    color: 'red',
    fontSize: '25px'
  }
  green20 = {
    color: 'green',
    fontSize: '20px'
  }

  getBadgeClasses() {
    let badges = "badge m-2 badge-";
    badges += this.state.count === 0 ? 'warning' : 'primary';
    return badges;
  }

  render() {
    return (
      <>
        <h1>Rendering the Styles</h1>
        <span>This State Count {this.state.count}</span>
        {/* render styles from objects (mind the words separated by dashes) */}
        <span style={this.styles}>Obj reference Stylying</span>
        {/* render inline style */}
        <span style={{color: 'blue', fontSize: '19px', textDecoration: 'underline'}}>Inline Stylying</span>
        {/* render styles dinamycally 1*/}
        <span style={this.state.count > 0 ? this.green20 : this.red25}>Render styles dinamically</span>
        {/* render the style by appending classes dynamically */}
        <span className={this.getBadgeClasses()}>This is dynamically rendered by appending bootstrap classes according to what the count is</span>
      </>
    );
  }
}

export default Counter;
