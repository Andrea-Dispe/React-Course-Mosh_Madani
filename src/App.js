import React, { Component } from "react";
import Counters from "./components/Counters";
import Navigation from "./components/Navigation";
import RenderingStyles from "./components/RenderingStyles";
import RenderingLists from "./components/RenderingLists";
import ConditionalRendering from "./components/ConditionalRendering";
import HandlingEvents from "./components/HandlingEvents";
import UpdateState from "./components/UpdateState";
import MountingPhase from "./components/MountingPhase";

import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 5 },
      { id: 2, value: 10 },
      { id: 3, value: 7.5 },
    ],
  };

  handleDelete = (id) => {
    console.log("id is ", id);
    console.log("the state is ", this.state);
    const counters = this.state.counters.filter((counter) => counter.id !== id);
    // in the setState remeber to pass the new array inside an object
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((counter) => (counter.value = 0));
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    console.log('incrementing: ');
    // make a copy of the counters
    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(counter);
    // make a copy of the specific passed counter
    counters[counterIndex] = { ...counter };
    counters[counterIndex].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    // make a copy of the counters
    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(counter);
    // make a copy of the specific passed counter
    counters[counterIndex] = { ...counter };
    counters[counterIndex].value--;
    this.setState({ counters });
  };



  render() {
    return (
      <>
        <Navigation counters={this.state.counters} />
        <main>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
          <RenderingStyles />
          <RenderingLists />
          <ConditionalRendering />
          <HandlingEvents />
          <UpdateState />
          <MountingPhase />
        </main>
      </>
    );
  }
}

export default App;
