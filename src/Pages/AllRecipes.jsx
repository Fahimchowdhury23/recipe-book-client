import React, { useState } from "react";
import { useLoaderData } from "react-router";
import RecipeCard from "./RecipeCard";

const AllRecipes = () => {
  const recipesData = useLoaderData();
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

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

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    } else if (sortOrder === "desc") {
      return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
    }
    return 0;
  });

  return (
    <section>
      <title>All Recipes | Recipe Book</title>
      <h2 className="text-center pt-2 md:pt-4 text-xl md:text-2xl lg:text-3xl font-bold text-secondary drop-shadow md:mb-1">
        All Recipes
      </h2>
      <p className="border-b-3 w-1/3 md:w-1/4 mx-auto border-accent/70 mb-3 lg:mb-5"></p>

      {/* Cuisine Type */}

      <div className="flex justify-center items-center gap-2 md:gap-4">
        <div className="flex justify-center items-center gap-1 lg:gap-2">
          <div>
            <p className="md:text-lg lg:text-xl whitespace-nowrap font-semibold text-accent">
              Cuisine Type :
            </p>
          </div>

          <div>
            <select
              name="cuisineType"
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="p-1 md:p-2 cursor-pointer rounded-lg bg-white text-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
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
        </div>

        {/* Sorting by Title */}

        <div className="flex justify-center items-center gap-1 lg:gap-2">
          <div>
            <p className="md:text-lg lg:text-xl whitespace-nowrap font-semibold text-accent">
              Sort By Title :
            </p>
          </div>

          <div>
            <select
              name="sorting"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="p-1 md:p-2 cursor-pointer rounded-lg bg-white text-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            >
              <option className="bg-primary text-lg font-medium" value="none">
                Default
              </option>

              <option className="bg-primary text-lg font-medium" value="asc">
                A to Z
              </option>

              <option className="bg-primary text-lg font-medium" value="desc">
                Z to A
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-3 lg:pt-6 pb-10 w-11/12 xl:w-10/12 mx-auto">
        {sortedRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </section>
  );
};

export default AllRecipes;
