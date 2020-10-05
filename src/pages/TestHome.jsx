import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";





const TestHome = (props) => {
 const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then((data) => setPizzas(data.data));
  })

  return (
    <div className="container">
      {pizzas.map(elem => elem.name)}
    </div>
  );
};

export default TestHome;
