import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, SortPopup, PizzaBlock } from "../components";
import Preloader from "../components/common/Preloader";
import { actions } from "../redux/reducers/filters-reducer";
import { fetchPizzasTC } from "../redux/reducers/pizzas-reducer";
import {
  getCategory,
  getIsLoading,
  getPizzas,
  getSortBy,
  getCartItems,
} from "../redux/selectors/selectors";

const categoryNames = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortNames = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

const Home = (props) => {
  const pizzas = useSelector(getPizzas);
  const isLoading = useSelector(getIsLoading);

  const category = useSelector(getCategory);
  const sortBy = useSelector(getSortBy);
  const cartItems = useSelector(getCartItems);

  const dispatch = useDispatch();

  /* console.log (category, sortBy) */

  useEffect(() => {
    //if проверяет длину массива, чтобы заново не запрашивать пиццы при переходе с Cart на Home
    /* if (!pizzas.items.length) { */
    dispatch(fetchPizzasTC(category, sortBy));
    /* } */
  }, [category, sortBy]);

  //useCallBack - для отмены лишнего ререндера Категорий при получении данных с серва
  const onSelectCategory = useCallback((category) => {
    dispatch(actions.setCategory(category));
  }, []);

  const onSelectSortBy = useCallback((type) => {
    dispatch(actions.setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          items={categoryNames}
          activeCategory={category}
        />
        <SortPopup
          items={sortNames}
          activeSortType={sortBy.type}
          onClickSortBy={onSelectSortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="content__items">
          {pizzas.map((elem) => (
            <PizzaBlock
              key={elem.id}
              addedCount={cartItems[elem.id] && cartItems[elem.id].items.length}
              {...elem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
