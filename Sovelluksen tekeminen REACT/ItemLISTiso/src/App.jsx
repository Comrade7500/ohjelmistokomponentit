import React from "react";
import Header from "./header";
import ItemList from "./itemlist";
import ShoppingForm from "./shoppinglist";
import { ShoppingProvider } from "./shoppingcontext";
import "./App.css";

const App = () => {
  return (
    <ShoppingProvider>
      <div className="container">
        <Header />
        <h1>Tuotteet</h1>
        <ShoppingForm />
        <ItemList />
      </div>
    </ShoppingProvider>
  );
};

export default App;
