import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/counter/Counter";
import NameList from "./components/nameList/NameList";

function App() {
  return (
    <div className="App">
      <Greeting name="Bryan Elpitiya" />
      <Counter />
      <NameList names={["Alice", "Bob", "Charlie", "David"]} />
    </div>
  );
}

export default App;
