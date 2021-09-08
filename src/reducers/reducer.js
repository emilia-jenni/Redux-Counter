import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASING:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case actionTypes.DECREASING:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case actionTypes.ADDFIVE:
      return {
        ...state,
        counter: state.counter + action.value,
      };

    case actionTypes.REMOVEFIVE:
      return {
        ...state,
        counter: state.counter - action.value,
      };

    case actionTypes.RESET:
      return {
        ...state,
        counter: 0,
      };

    case actionTypes.STORE_RESULTS:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };

    case actionTypes.DELETE_RESULTS:
      const updatedArray = state.results.filter(
        (item) => item.id !== action.item
      );
      return {
        ...state,
        results: updatedArray,
      };
  }

  return state;
};

const initialState = {
  counter: 0,
  results: [
    {
      id: 1,
      value: 10,
    },
    {
      id: 2,
      value: 1000,
    },
    {
      id: 3,
      value: 1000000,
    },
  ],
};

export default reducer;
