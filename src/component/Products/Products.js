import React from "react";
import "./products.css";
import Slide from "./Slide";

function Products() {
  return (
    <div className="products">
      <div
        className="ProductsText"
      >
        <p>категория</p>
        <h1>Продукты</h1>
      </div>
      <div className="Slide">
        <Slide  />
      </div>
    </div>
  );
}

export default Products;
