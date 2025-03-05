import React, { useState } from "react";
import Header from "./header";
import ItemList from "./itemlist";
import ShoppingForm from "./shoppinglist";
import "./App.css"; // Lisää tyylit

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <Header />
      <h1>Tuotteet</h1>
      <ShoppingForm onAddItem={addItem} />
      <ItemList items={items} onDeleteItem={deleteItem} />
    </div>
  );
};

export default App;
