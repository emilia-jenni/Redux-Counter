import React, { Component } from "react";

import { connect } from "react-redux";

import * as actionTypes from "../actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Your score: {this.props.ctr}</h1>
        <div>
          <button onClick={this.props.onIncCounter}>Add one</button>
          <button onClick={this.props.onDecCounter}>Remove one</button>
          <button onClick={this.props.onAddFive}>Add five</button>
          <button onClick={this.props.onRemoveFive}>Remove five</button>
          <button onClick={this.props.resetCounter}>reset</button>
        </div>
        <button onClick={this.props.onStoreResults}>Store results</button>

        <div>
          <ul>
            {this.props.storedResults.map((item) => (
              <li
                key={item.id}
                onClick={() => this.props.onDeleteResults(item.id)}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREASING }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREASING }),
    onAddFive: () => dispatch({ type: actionTypes.ADDFIVE, value: 5 }),
    onRemoveFive: () => dispatch({ type: actionTypes.REMOVEFIVE, value: 5 }),
    resetCounter: () => dispatch({ type: actionTypes.RESET }),
    onStoreResults: () => dispatch({ type: actionTypes.STORE_RESULTS }),
    onDeleteResults: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULTS, item: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
