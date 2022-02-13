import React from "react";
import Header from "./component/Header/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Header/Home";
import HeaderBottom from "./component/Header/HeaderBottom";
import Products from "./component/Products/Products";
import About from "./component/About/About";
import Cards from "./component/Cards/Cards";
import Partners from "./component/Partners/Partners";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Products />
        <About />
        <Cards />
        <Partners />
        <Routes>
          <Route path="/" element={"<App />"} />
          <Route path="/home" element={'home'} />
          <Route path="/products" element={"<Products />"} />
          <Route path="/about" element={"<about />"} />
          <Route path="/showroom" element={"<showroom />"} />
          <Route path="/partner" element={"<partner />"} />
          <Route path="/contact" element={"<contact />"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
