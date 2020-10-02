export const getPizzas = (state) => {
  return state.pizzas.items;
};

export const getIsLoading = (state) => {
  return state.pizzas.isLoading;
};


//filters
export const getSortBy = (state) => {
  return state.filters.sortBy;
};

export const getCategory = (state) => {
  return state.filters.category;
};


//cart
export const getTotalPrice = (state) => {
  return state.cart.totalPrice;
};

export const getTotalCount= (state) => {
  return state.cart.totalCount;
};

export const getCartItems= (state) => {
  return state.cart.items;
};



