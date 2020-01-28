import React, { useState } from "react";
import "./App.css";
import Counters from "./components/counters";

function App() {
  const initialState = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  const [state, setState] = useState(initialState);

  const handleReset = () => {
    const counters = state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    setState({ counters });
  };

  const handleIncrement = id => {
    const counters = state.counters.map(counter => {
      if (counter.id === id) {
        counter.value = counter.value + 1;
      }
      return counter;
    });
    setState({ counters });
  };

  const handleDecrement = id => {
    const counters = state.counters.map(counter => {
      if (counter.id === id) {
        counter.value = counter.value - 1;
      }
      return counter;
    });
    setState({ counters });
  };

  const handleDelete = id => {
    const updatedCounters = state.counters.filter(counter => counter.id !== id);
    setState({ counters: updatedCounters });
  };
  return (
    <div>
      <Counters
        counters={state.counters}
        handleDelete={handleDelete}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;
