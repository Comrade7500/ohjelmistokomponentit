import React from "react";

const ItemList = ({ items, onDeleteItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <span onClick={() => onDeleteItem(index)}>❌</span>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
