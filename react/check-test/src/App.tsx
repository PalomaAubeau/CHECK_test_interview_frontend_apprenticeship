import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import NameList from "./components/NameList";

const App = () => {
  const names = ["Alice", "Bob", "Charlie", "David"];
  return (
    <div className="App">
      <Greeting name="Bryan Elpitiya" />
      <Counter />
      <NameList names={names} />
    </div>
  );
};

export default App;
