import React from "react";
import { useLoaderData } from "react-router";

const RecipeDetails = () => {
  const recipeData = useLoaderData();
  const {
    displayName,
    photoURL,
    email,
    image,
    title,
    ingredients,
    instructions,
    cuisineType,
    prepTime,
    categories,
  } = recipeData;
  return (
    <div className="py-10">
      <div className="max-w-2xl lg:max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-5">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-xl"
        />

        <h2 className="text-3xl font-bold">{title}</h2>

        <div className="flex items-center gap-3">
          <img
            src={photoURL}
            alt={displayName}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-md font-medium">{displayName}</p>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Cuisine:</span> {cuisineType}
          </p>
          <p>
            <span className="font-semibold">Prep Time:</span> {prepTime} mins
          </p>
          <p>
            <span className="font-semibold">Category:</span> {categories}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Ingredients</h3>
          <p className="mt-1 text-gray-700">{ingredients}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Instructions</h3>
          <p className="mt-1 text-gray-700">{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
