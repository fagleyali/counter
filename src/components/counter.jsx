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
    <div key={counter.id} className="row">
      <div className="col-1">
        <span styles={styles} className={getBadgeClasses(counter)}>
          {formatCount()}
        </span>
      </div>
      <div className="col">
        <button
          onClick={() => handleIncrement(counter.id)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => handleDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <button
          onClick={() => handleDecrement(counter.id)}
          className="btn btn-secondary btn-sm m-2"
          disabled={counter.value === 0}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
function getBadgeClasses(counter) {
  let classes = "badge m-3 badge-";
  classes += counter.value === 0 ? "warning" : "primary";
  return classes;
}
