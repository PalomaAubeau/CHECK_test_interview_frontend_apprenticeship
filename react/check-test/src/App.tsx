import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <Greeting name="Bryan Elpitiya" />
      <Counter />
    </div>
  );
}

export default App;
