import React from "react";
import Slider from "./Slider";
import SectionOne from "../Components/SectionOne";

const Home = () => {
  return (
    <section className="pt-4 lg:pt-6">
      <h1 className="italic text-secondary text-3xl lg:text-4xl pb-7 font-bold text-center tracking-wide animate-pulse transition duration-500 ease-in-out ">
        Savor Every Bite - Elevated Everyday Recipes
      </h1>
      <Slider></Slider>
      <SectionOne></SectionOne>
    </section>
  );
};

export default Home;
