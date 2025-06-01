import React from "react";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl p-3 shadow-md overflow-hidden flex flex-col">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-48 w-full rounded-2xl object-cover"
      />
      <div className="p-4 space-y-2 flex-1">
        <h2 className="text-xl font-semibold">{recipe.title}</h2>
        <p className="text-sm text-gray-500">Cuisine: {recipe.cuisineType}</p>
        <div className="flex items-center gap-2">
          <img
            src={recipe.photoURL}
            alt={recipe.displayName}
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-medium text-secondary">
            By {recipe.displayName}
          </span>
        </div>
      </div>
      <div className="pb-2">
        <Link to={`/recipeDetails/${recipe._id}`}>
          <button className="btn w-full rounded-xl text-[#7B3F00]/80 text-lg bg-primary">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
