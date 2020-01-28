import React from "react";

const Counter = props => {
  const { counter, handleDelete, handleIncrement, handleDecrement } = props;
  
  const formatCount = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  const styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  return (
    <div key={counter.id}>
      <span style={styles} className={getBadgeClasses(counter)}>
        {formatCount()}
      </span>
      <button
        onClick={()=> handleIncrement(counter.id)}
        className="btn btn-secondary btn-sm m-2"
      >
        Increment
      </button>
      <button
        onClick={ ()=> handleDelete(counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
      <button
        onClick={()=> handleDecrement(counter.id)}
        className="btn btn-secondary btn-sm m-2"
        disabled={counter.value === 0}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
function getBadgeClasses(counter) {
  let classes = "badge m-4 badge-";
  classes += counter.value === 0 ? "warning" : "primary";
  return classes;
}
