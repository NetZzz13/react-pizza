const initialState = {
  category: null,
  sortBy: {type: "popular", order: "desc"},
  
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY": {
      return { ...state, sortBy: action.payload };
    }
    case "SET_CATEGORY": {
      return { ...state, category: action.payload };
    }
    default:
      return state;
  }
};

export const actionsFilters = {
  setSortBy: (sortBy) => {
    return {
      type: "SET_SORT_BY",
      payload: sortBy,
    };
  },
  setCategory: (catIndex) => {
    return {
      type: "SET_CATEGORY",
      payload: catIndex,
    };
  },

};

export default filtersReducer;
