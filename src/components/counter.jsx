import React, { useState } from "react";

const Counter = () => {
  const initialState = {
    count: 0
  };
  const [state, setState] = useState(initialState);
  
  const handleIncrement = e => {
    setState({count: state.count + 1})
  };
  const handleDecrement = e => {
    setState({count: state.count < 1 ? 0 : state.count - 1})
  };
  const formatCount = () => {
    const { count } = state;
    return count === 0 ? "Zero" : count;
  };

  const styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  return (
    <React.Fragment>
      <span style={styles} className={getBadgeClasses(state)}>
        {formatCount()}
      </span>
      <button onClick={handleIncrement} className="btn btn-secondary btn-sm m-2" >
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-secondary btn-sm m-2" disabled={state.count===0}>
        Decrease
      </button>
    </React.Fragment>
  );
};

export default Counter;
function getBadgeClasses(state) {
  let classes = "badge m-4 badge-";
  classes += state.count === 0 ? "warning" : "primary";
  return classes;
}
