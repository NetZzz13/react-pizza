const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_TO_CART": {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems)); //объединяем все пиццы в 1 массив

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: allPizzas.reduce((total, elem) => elem.price + total, 0),
      };
    }

    default:
      return state;
  }
};

export const actions = {
  addPizzaToCart: (pizza) => {
    return {
      type: "ADD_PIZZA_TO_CART",
      payload: pizza,
    };
  },
};

export default cartReducer;
