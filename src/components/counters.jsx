import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 2 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
   }
  render() {
    return (
      <>
        {this.state.counters.map(counter => <Counter value={counter.value} key={counter.id} />)}
      </>
    );
  }
}

export default Counters;