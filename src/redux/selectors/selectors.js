export const getPizzas = (state) => {
  return state.pizzas.items;
};

export const getSortBy = (state) => {
  return state.filters.sortBy;
};