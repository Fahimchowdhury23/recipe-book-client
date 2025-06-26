import React, { use } from "react";
import TopRecipeCard from "./TopRecipeCard";
import { Link } from "react-router";

const recipePromise = fetch(
  "https://recipe-book-server-alpha.vercel.app/recipes/top"
).then((res) => res.json());

const TopRecipes = () => {
  const topRecipeData = use(recipePromise);

  return (
    <section>
      <h2 className="text-center pt-4 md:pt-6 lg:pt-10 text-2xl lg:text-3xl font-bold text-secondary drop-shadow mb-1 lg:mb-2">
        Top Recipes
      </h2>
      <p className="border-b-3 w-1/3 mx-auto border-accent/70 md:mb-3 lg:mb-6"></p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 pt-4 pb-6 lg:pb-10 w-11/12 xl:w-10/12 mx-auto">
        {topRecipeData.map((topRecipe) => (
          <TopRecipeCard
            key={topRecipe._id}
            topRecipe={topRecipe}
          ></TopRecipeCard>
        ))}
      </div>

      <div className="pb-6 lg:pb-10 text-center">
        <Link to="/allRecipes">
          <button className="btn p-3 md:p-4 lg:p-6 rounded-xl font-bold text-accent/80 text-xl bg-gradient-to-r from-primary to-white border-0">
            See All Recipes
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TopRecipes;
