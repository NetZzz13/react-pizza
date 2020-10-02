import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";

const App = (props) => {

  

  
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
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/cart" component={() => <Cart />} />
      </div>
    </div>
  );
};

export default App;
