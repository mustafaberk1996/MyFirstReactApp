import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Pet from "./Pet";
import Clock from "./Clock";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Doggy" animal="Dog" breed="Golden" />
      <SearchParams name="addsad" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
