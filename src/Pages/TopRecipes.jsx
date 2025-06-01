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
      <h2 className="text-center pt-16 text-3xl font-bold text-secondary drop-shadow mb-2">
        Top Recipes
      </h2>
      <p className="border-b-3 w-1/3 mx-auto border-[#7B3F00]/70 mb-6"></p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-10 w-10/12 mx-auto">
        {topRecipeData.map((topRecipe) => (
          <TopRecipeCard
            key={topRecipe._id}
            topRecipe={topRecipe}
          ></TopRecipeCard>
        ))}
      </div>
      <div className="pb-10 text-center">
        <Link
          className="btn p-6 rounded-xl font-bold text-[#7B3F00]/80 text-xl bg-gradient-to-r from-primary to-white border-0"
          to="/allRecipes"
        >
          See All Recipes
        </Link>
      </div>
    </section>
  );
};

export default TopRecipes;
