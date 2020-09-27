import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import filtersReducer from "./reducers/filters-reducer";
import pizzasReducer from "./reducers/pizzas-reducer";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cart-reducer";

const reducers = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;
