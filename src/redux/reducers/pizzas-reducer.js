import { pizzasAPI } from "../../api/api";

const initialState = {
  items: [],
  isLoading: false,
  availableTypes: ["тонкое", "традиционное"],
  availableSizes: [26, 30, 40]
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS": {
      return { ...state, items: action.payload, isLoading: false};
    }
    case "SET_LOADING": {
      return { ...state, isLoading: action.isLoading };
    }

    default:
      return state;
  }
};

export const actionsPizzas = {
  setPizzas: (items) => {
    return {
      type: "SET_PIZZAS",
      payload: items,
    };
  },
  setLoading: (isLoading) => {
    return {
      type: "SET_LOADING",
      isLoading,
    };
  },
};

export const fetchPizzasTC = (category, sortBy) => {
  return async (dispatch) => {
    dispatch(actionsPizzas.setLoading(true));
    let data = await pizzasAPI.getPizzas(category, sortBy);
    dispatch(actionsPizzas.setPizzas(data));
    // dispatch(actions.setLoading(false));
  };
};

/* export const fetchPizzasTC = () => (dispatch) => {
  axios
    .get("http://localhost:3001/pizzas")
    .then((response) => dispatch(actions.setPizzas(response.data)));
}; */

export default pizzasReducer;
