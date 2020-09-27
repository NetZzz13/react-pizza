import React, { useState } from "react";

//React.memo - делает поверхностное сравнение (если ссылка на items не изменилась - не делать лишний ререндер)
const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {


  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((elem, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              key={`${elem}_${index}`}
              onClick={() => onClickCategory(index)}
            >
              {elem}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
