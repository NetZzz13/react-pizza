import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";

const Home = ({ pizzas }) => {
  /*  console.log(pizzas) */
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(elem) => console.log(elem)}
          items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((elem) => (
          <PizzaBlock key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default Home;
