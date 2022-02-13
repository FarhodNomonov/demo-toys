import React from "react";
import Products from "./../Products/Products";
import About from "./../About/About";
import Cards from "./../Cards/Cards";
import Partners from "./../Partners/Partners";
import SlideHome from './../Header/SlideHome';
import HeaderBottom from './../Header/HeaderBottom';

function Home() {
  return (
    <>
      <SlideHome />
      <HeaderBottom />
      <Products />
      <About />
      <Cards />
      <Partners />
    </>
  );
}

export default Home;
