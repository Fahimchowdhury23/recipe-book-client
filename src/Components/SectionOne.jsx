import React from "react";
import Lottie from "lottie-react";
import cookingAnimation from "../animations/Animation - 1748173156747.json";

const SectionOne = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Cook With Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover thousands of recipes from around the world. Whether you're
            a beginner or a pro, our step-by-step guides, prep timers, and
            community ratings help you cook better every day.
          </p>

          <div className="flex flex-col mx-auto gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">
                👩‍🍳 Step-by-Step Instructions
              </h3>
              <p className="text-gray-600">
                Clear directions and images for every recipe, so you never feel
                lost in the kitchen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">🌍 Global Flavors</h3>
              <p className="text-gray-600">
                Explore cuisines from all over the world—from Bangladeshi bhuna
                to Italian pasta.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">
                💬 Community Driven
              </h3>
              <p className="text-gray-600">
                Add your own recipes, get feedback, and connect with food lovers
                just like you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-10/12 bg-primary p-4 rounded-2xl m-auto">
        <Lottie animationData={cookingAnimation}></Lottie>
      </section>
    </div>
  );
};

export default SectionOne;
