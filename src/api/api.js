import axios from "axios";

//&_sort из документации фэйкового json-сервeра

export const pizzasAPI = {
  getPizzas(category, sortBy) {
    return axios
      .get(
        `/pizzas/?${
          category !== null ? `category=${category}` : ""
        }&_sort=${sortBy.type}&_order=${sortBy.order}`
      )
      .then((response) => response.data);
  },
};
