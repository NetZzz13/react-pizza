import React, { useState } from "react";

const Categories = ({ items, onClick }) => {
  const [activeItem, setActiveItem] = useState(null);

  
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => setActiveItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((elem, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              key={`${elem}_${index}`}
              onClick={() => setActiveItem(index)}
            >
              {elem}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
