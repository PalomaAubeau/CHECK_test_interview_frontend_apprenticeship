import { useState } from "react";
import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <button className="btn" onClick={decrement}>
        -
      </button>
      <p>{count}</p>
      <button className="btn" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
