import React, { Suspense } from "react";
import Slider from "./Slider";
import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";
import TopRecipes from "./TopRecipes";
import Loader from "../Components/Loader";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="pt-4 lg:pt-6">
      <h1 className="text-secondary text-2xl lg:text-4xl pb-5 font-bold text-center">
        Browse, Like & Organize - &nbsp;
        <span>
          <Typewriter
            words={[
              "authentic recipes.",
              "flavorful journeys.",
              "home-cooked favorites.",
              "global cuisines.",
              "your next meal idea.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            cursorColor="text-secondary"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <Slider></Slider>
      <Suspense fallback={<Loader></Loader>}>
        <TopRecipes></TopRecipes>
      </Suspense>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </section>
  );
};

export default Home;
