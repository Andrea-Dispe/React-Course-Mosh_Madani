import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 50 },
      { id: 1, value: 100},
      { id: 2, value: 150 },
      { id: 3, value: 200 }
    ]
   }

   handleDelete = (id) => {
     console.log('id is ', id)
     console.log('the state is ', this.state)
     const counters =  this.state.counters.filter(counter => counter.id !== id)
     // in the setState remeber to pass the new array inside an object
     this.setState({counters})
   }

  render() {
    return (
      <>
        {this.state.counters.map(counter => <div key={counter.id} style={{borderBottom: '3px solid black' }}><Counter counter={counter} onDelete={this.handleDelete}/></div>)}
      </>
    );
  }
}

export default Counters;
