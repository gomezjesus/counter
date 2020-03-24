import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    return (
      <div>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          >
            <h4>Title</h4>
          </Counter>
        ))}

        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm -2"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
