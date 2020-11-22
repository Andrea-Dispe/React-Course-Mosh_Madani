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
     this.setState(this.state.counters.filter(counter => counter.id !== id))
   }

  render() {
    return (
      <>
        {this.state.counters.map(counter => <Counter value={counter.value} key={counter.id} onDelete={this.handleDelete }/>)}
      </>
    );
  }
}

export default Counters;
