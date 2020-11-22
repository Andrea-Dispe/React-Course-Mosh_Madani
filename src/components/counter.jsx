import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    id: this.props.counter.id
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

  handleIncrement = () => {
    // remember the setState takes an object
    console.log('this.props from counter', this.props.value)
    this.setState({value: this.state.value + 1})
  }


  render() {
    return (
      <>
        <p>This is the #{this.props.counter.id} Counter</p>
        <span>This State value {this.state.value}</span>
        <button onClick={this.handleIncrement}>Increment</button>
        {/* we want to delete a counter, but since the counter component does not own the state of the counter, it only copys from the props, and since the component should
        be deleted by the component that owns it, we need to raise en event from the child component that fires inside the parent component and delete it from there */}
        <button className='btn btn-danger btn-sm m-2' onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
        <span style={this.styles}>Obj reference Stylying</span>
        {/* render inline style */}
        <span style={{color: 'blue', fontSize: '19px', textDecoration: 'underline'}}>Inline Stylying</span>
        {/* render the style by appending classes dynamically */}
        <span className={this.getBadgeClasses()}>This is dynamically rendered by appending bootstrap classes according to what the count is</span>
        {/* render styles dinamycally */}
        <span style={this.state.value > 0 ? this.green20 : this.red25}>Render styles dinamically</span>
        <button>click me</button>
        {/* <button className="btn btn-danger btn-sm m-2" onClick={this.props.onDelete}>Delete</button> */}
      </>
    );
  }
}

export default Counter;
