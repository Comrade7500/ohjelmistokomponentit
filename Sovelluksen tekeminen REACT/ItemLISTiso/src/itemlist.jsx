import React from "react";
import { useShopping } from "./shoppingcontext";

const ItemList = () => {
  const { items, deleteItem } = useShopping();

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <span onClick={() => deleteItem(index)}>❌</span>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
