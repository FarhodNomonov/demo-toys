import React from "react";
import Header from "./component/Header/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={"<Products />"} />
          <Route path="/about" element={"<about />"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
