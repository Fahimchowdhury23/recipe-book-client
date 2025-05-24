import React from "react";
import { useLoaderData } from "react-router";
import RecipeCard from "./RecipeCard";

const AllRecipes = () => {
  const recipesData = useLoaderData();

  return (
    <section>
      <h2 className="text-center pt-8 text-3xl font-bold text-secondary drop-shadow mb-8">
        All Recipes!
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-4 pb-10 w-10/12 mx-auto">
        {recipesData.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </section>
  );
};

export default AllRecipes;
