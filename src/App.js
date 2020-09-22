import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import axios from "axios";
import { actions } from "./redux/reducers/pizzas-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "./redux/selectors/selectors";


const App = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(getPizzas);

  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then((response) => dispatch(actions.setPizzas(response.data.pizzas)));
  }, []);


  /* let [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then((response) => setPizzas(response.data.pizzas));

    //2 вариант
    // fetch("http://localhost:3000/db.json")
    //   .then((response) =>  { console.log(response)
    //     return response.json()})
    //   .then((json) => setPizzas(json.pizzas));
  }, []); */

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={() => <Home pizzas={items} />} />
        <Route exact path="/cart" component={() => <Cart />} />
      </div>
    </div>
  );
};

export default App;
