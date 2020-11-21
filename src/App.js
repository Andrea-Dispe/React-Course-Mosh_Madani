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
  );
}

export default App;
