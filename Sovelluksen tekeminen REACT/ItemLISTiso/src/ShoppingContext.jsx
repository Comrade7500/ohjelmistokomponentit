import React, { createContext, useState, useContext } from "react";


const ShoppingContext = createContext();


export const ShoppingProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <ShoppingContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </ShoppingContext.Provider>
  );
};


export const useShopping = () => useContext(ShoppingContext);
