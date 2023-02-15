import React from "react";
import Products from "./../Products/Products";
import About from "./../About/About";
import Cards from "./../Cards/Cards";
import Partners from "./../Partners/Partners";
import SlideHome from './../Header/SlideHome';
import HeaderBottom from './../Header/HeaderBottom';
import PartnerSlider from "../PartnerSlider";
import ToysForm from "../ToysForm";

function Home() {
  return (
    <>
      <SlideHome />
      <HeaderBottom />
      <Products />
      <About />
      <Cards />
      <Partners />
      <PartnerSlider />
      <ToysForm />
    </>
  )
}

export default Home;
