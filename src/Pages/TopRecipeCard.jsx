import React from "react";
import { Link } from "react-router";

const TopRecipeCard = ({ topRecipe }) => {
  return (
    <div className="bg-white rounded-2xl p-3 shadow-md overflow-hidden flex flex-col">
      <Link to={`/recipeDetails/${topRecipe._id}`}>
        <img
          src={topRecipe.image}
          alt={topRecipe.title}
          className="h-56 w-full rounded-2xl object-cover"
        />
      </Link>

      <div className="p-3 space-y-2 flex-1">
        <h2 className="text-xl font-semibold text-black/80">
          {topRecipe.title}
        </h2>
        <p className="text-lg text-gray-500">
          Cuisine: {topRecipe.cuisineType}
        </p>
        <p className="text-md text-gray-500">Likes: {topRecipe.likeCount}</p>

        <div className="flex items-center gap-2">
          <img
            src={topRecipe.photoURL}
            alt={topRecipe.displayName}
            className="w-10 h-10 rounded-full"
          />

          <span className="lg:text-lg font-medium text-secondary">
            By {topRecipe.displayName}
          </span>
        </div>
      </div>

      <div>
        <Link to={`/recipeDetails/${topRecipe._id}`}>
          <button className="btn w-full rounded-xl text-accent/80 font-semibold text-lg bg-primary/70 hover:bg-primary">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopRecipeCard;
