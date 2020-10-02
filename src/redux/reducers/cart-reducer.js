const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_TO_CART": {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: currentPizzaItems.reduce(
            (total, elem) => elem.price + total,
            0
          ),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (total, elem) => newItems[elem].items.length + total,
        0
      );
      const totalPrice = Object.keys(newItems).reduce(
        (total, elem) => newItems[elem].totalPrice + total,
        0
      );

      return {
        ...state,
        items: newItems,
        totalCount: totalCount,
        totalPrice: totalPrice,
      };
    }

    case "REMOVE_CART_ITEM": {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case "PLUS_CART_ITEM": {
      const newItemsObj = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newItemsObj,
          totalPrice: newItemsObj.reduce(
            (total, elem) => elem.price + total,
            0
          ),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (total, elem) => newItems[elem].items.length + total,
        0
      );

      const totalPrice = Object.keys(newItems).reduce(
        (total, elem) => newItems[elem].totalPrice + total,
        0
      );

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newItemsObj =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newItemsObj,
          totalPrice: newItemsObj.reduce(
            (total, elem) => elem.price + total,
            0
          ),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (total, elem) => newItems[elem].items.length + total,
        0
      );

      const totalPrice = Object.keys(newItems).reduce(
        (total, elem) => newItems[elem].totalPrice + total,
        0
      );

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "CLEAR_CART": {
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
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

  clearCart: () => {
    return {
      type: "CLEAR_CART",
    };
  },

  removeCartItem: (id) => {
    return {
      type: "REMOVE_CART_ITEM",
      payload: id,
    };
  },

  plusCartItem: (id) => {
    return {
      type: "PLUS_CART_ITEM",
      payload: id,
    };
  },
  
  minusCartItem: (id) => {
    return {
      type: "MINUS_CART_ITEM",
      payload: id,
    };
  },
};

export default cartReducer;
