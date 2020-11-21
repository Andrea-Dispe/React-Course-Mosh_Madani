<<<<<<< HEAD
import Counters from './components/Counter'
import RenderingStyles from "./components/RenderingStyles";
import RenderingLists from "./components/RenderingLists";
import ConditionalRendering from "./components/ConditionalRendering";
import HandlingEvents from "./components/HandlingEvents";
import UpdateState from "./components/UpdateState";
import "./App.css";

function App() {
  return (
    <>
      {/* <Counter></Counter> */}
      <Counters />
      <RenderingStyles />
      <RenderingLists />
      <ConditionalRendering />
      <HandlingEvents />
      <UpdateState />
    </>
=======
import Counters from './components/counters'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Counters />
>>>>>>> 82c190d572531db2a9b9e7231ef26a8e49a992bb
  );
}

export default App;
