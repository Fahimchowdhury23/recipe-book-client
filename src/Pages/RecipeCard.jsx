import React from "react";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl p-2 lg:p-3 shadow-md overflow-hidden flex flex-col">
      <Link to={`/recipeDetails/${recipe._id}`}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-50 w-full rounded-2xl object-cover"
        />
      </Link>

      <div className="p-4 space-y-2 flex-1">
        <h2 className="text-xl font-semibold text-accent">{recipe.title}</h2>
        <p className="text-gray-500">Cuisine: {recipe.cuisineType}</p>
        <div className="flex items-center gap-2">
          <img
            src={recipe.photoURL}
            alt={recipe.displayName}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium text-secondary">
            By {recipe.displayName}
          </span>
        </div>
      </div>
      <div>
        <Link to={`/recipeDetails/${recipe._id}`}>
          <button className="btn w-full rounded-xl text-accent/80 text-lg bg-primary/70 hover:bg-primary">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
