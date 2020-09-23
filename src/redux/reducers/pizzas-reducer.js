const initialState = {
  items: [],
  isLoading: false,
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS": {
      return { ...state, items: action.payload };
    }

    default:
      return state;
  }
};

export const actions = {
  setPizzas: (items) => {
    return {
      type: "SET_PIZZAS",
      payload: items,
    };
  },
 /*  fetchPizzas: () => {
    return {
      type: "FETCH_PIZZAS",
    }
  } */
};

export default pizzasReducer;
