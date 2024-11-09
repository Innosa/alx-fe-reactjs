// src/components/Counter.jsx
import React, { useState } from "react";

function Counter() {
  // Initialize state with useState, starting the count at 0
  const [count, setCount] = useState(0);

  // Handlers for increment, decrement, and reset actions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "24px" }}>Count: {count}</p>
      <button onClick={increment} style={{ margin: "5px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: "5px" }}>
        Decrement
      </button>
      <button onClick={reset} style={{ margin: "5px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
