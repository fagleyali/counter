import React from "react";
import Counter from "./counter";

const Counters = props => {
  const {
    counters,
    handleDelete,
    handleIncrement,
    handleDecrement,
    handleReset
  } = props;

  return (
    <React.Fragment>
      <div>
        <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters &&
          counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              handleDelete={handleDelete}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default Counters;
