import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, SortPopup, PizzaBlock } from "../components";
import { actions } from "../redux/reducers/filters-reducer";
import { getPizzas } from "../redux/selectors/selectors";

const categoryNames = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortNames = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

const Home = (props) => {
  const pizzas = useSelector(getPizzas);
  const dispatch = useDispatch();

  //useCallBack - для отмены лишнего ререндера Категорий при получении данных с серва
  const onSelectCategory = useCallback((category) => {
    dispatch(actions.setCategory(category));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortNames} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas && pizzas.map((elem) => <PizzaBlock key={elem.id} {...elem} />)}
      </div>
    </div>
  );
};

export default Home;
