import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const scope = {
      roundBtn: {
        borderRadius: "0.9rem"
      }
    };

    console.log("Counters - Rendered");

    const { onReset, counters, onDelete, onIncrement, onAdd } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button
          onClick={onAdd}
          style={scope.roundBtn}
          className="btn btn-success btn-sm m-2"
        >
          +
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
