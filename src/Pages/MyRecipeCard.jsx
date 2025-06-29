import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const MyRecipeCard = ({ recipe, handleDelete, setSelectedRecipe }) => {
  const openModal = () => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="bg-white rounded-2xl p-2 lg:p-3 shadow-md overflow-hidden flex flex-col">
      <Link to={`/recipeDetails/${recipe._id}`}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-48 xl:h-60 w-full rounded-xl object-cover"
        />
      </Link>

      {recipe.displayName && (
        <div className="flex pl-1 items-center gap-2 mt-2">
          <img
            src={recipe.photoURL}
            alt={recipe.displayName}
            className="w-12 h-12 rounded-full"
          />
          <span className="text-lg font-medium text-secondary">
            By {recipe.displayName}
          </span>
        </div>
      )}

      <div className="pl-2 pt-2 lg:space-y-2 flex-1 flex flex-col">
        <h2 className="text-2xl font-semibold text-black opacity-80">
          {recipe.title}
        </h2>

        <p className="text-gray-600">
          <strong>Ingredients:</strong> {recipe.ingredients}
        </p>
        <p className="text-gray-600">
          <strong>Instructions:</strong> {recipe.instructions}
        </p>

        <div className="text-gray-500 space-y-1">
          <p>
            <strong>Cuisine:</strong> {recipe.cuisineType}
          </p>
          <p>
            <strong>Preparation Time:</strong> {recipe?.prepTime} mins
          </p>
          <p>
            <strong>Category:</strong> {recipe.categories}
          </p>
          <p>
            <strong>Likes:</strong> {recipe.likeCount || 0}
          </p>
        </div>

        <div className="flex justify-end gap-3 mt-auto">
          <button
            onClick={() => openModal()}
            className="bg-green-500 btn border-none hover:bg-green-600 text-white px-3 lg:px-4 py-1 rounded cursor-pointer"
          >
            Update
          </button>

          <button
            onClick={() => handleDelete(recipe._id)}
            className="bg-red-500 btn border-none hover:bg-red-600 flex gap-0 text-white px-3 lg:px-4 py-1 rounded cursor-pointer"
          >
            <MdDelete size={20} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyRecipeCard;
