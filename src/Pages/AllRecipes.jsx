import React, { useState } from "react";
import { useLoaderData } from "react-router";
import RecipeCard from "./RecipeCard";

const AllRecipes = () => {
  const recipesData = useLoaderData();
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const cuisines = [
    "All",
    "Italian",
    "Mexican",
    "Indian",
    "Chinese",
    "Greek",
    "Others",
  ];

  const filteredRecipes =
    selectedCuisine === "All"
      ? recipesData
      : recipesData.filter((recipe) => recipe.cuisineType === selectedCuisine);

  return (
    <section>
      <title>All Recipes | Recipe Book</title>
      <h2 className="text-center pt-8 text-3xl font-bold text-secondary drop-shadow mb-2">
        All Recipes
      </h2>
      <p className="border-b-3 w-1/3 mx-auto border-[#7B3F00]/70 mb-6"></p>

      <div className="w-10/12 mx-auto">
        <p className="text-xl font-semibold text-[#7B3F00] mb-2">
          Cuisine Type :
        </p>

        <select
          name="cuisineType"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
          className="p-3 cursor-pointer rounded-xl bg-white text-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
        >
          {cuisines.map((type) => (
            <option
              className="bg-primary text-lg font-medium"
              key={type}
              value={type}
            >
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 pb-10 w-10/12 mx-auto">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </section>
  );
};

export default AllRecipes;
