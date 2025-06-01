import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { BiSolidLike } from "react-icons/bi";
import { useLoaderData } from "react-router";
import AuthContext from "../Contexts/AuthContext";

const RecipeDetails = () => {
  const recipeData = useLoaderData();
  const { user } = use(AuthContext);
  const {
    _id,
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
    likeCount,
  } = recipeData;
  const [likes, setLikes] = useState(likeCount);

  const handleLike = (id) => {
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        setLikes(likes + 1);
        if (data.modifiedCount) {
          toast.dismiss();
          toast.success(`You liked ${title}`);
        }
      });
  };

  return (
    <div className="py-8">
      <title>Recipe Details | RecipeBook</title>
      <h1 className="text-center font-semibold text-3xl text-[#7B3F00] pb-4">
        <span className="font-extrabold">{likes}</span> People are interested in
        this recipe
      </h1>

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
            <p className="text-xl font-medium">{displayName}</p>
            <p className="text-gray-500">{email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm text-gray-700">
          <p>
            <span className="text-lg font-semibold">Cuisine:</span>
            {cuisineType}
          </p>
          <p>
            <span className="text-lg font-semibold">Prep Time:</span> {prepTime}
            mins
          </p>
          <p>
            <span className="text-lg font-semibold">Category:</span>
            {categories}
          </p>

          <div className="space-y-2">
            <p className="flex items-center gap-1">
              <span className="text-lg font-semibold">Like : </span>
              {likes}
            </p>

            <button
              onClick={() => handleLike(_id)}
              className={`btn flex items-center text-md items text-white px-5 border-none rounded  
                ${
                  user.email === email
                    ? "btn-disabled cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                }`}
            >
              <BiSolidLike size={18} /> Like
            </button>
          </div>
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
