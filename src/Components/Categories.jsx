import { useState } from 'react';

function Categories({ items }) {
  const [activeItem, setActiveItems] = useState(null);

  const onSelectItem = (index) => {
    setActiveItems(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : null} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeItem === index ? 'active' : null}
              onClick={() => onSelectItem(index)}
              key={`${item}_${index}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
