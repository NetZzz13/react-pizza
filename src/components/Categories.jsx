import React, { useState } from "react";

//React.memo - делает поверхностное сравнение (если ссылка на items не изменилась - не делать лишний ререндер)
const Categories = React.memo(({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((elem, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              key={`${elem}_${index}`}
              onClick={() => onSelectItem(index)}
            >
              {elem}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
