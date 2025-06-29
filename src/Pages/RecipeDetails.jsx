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
    fetch(`https://recipe-book-server-alpha.vercel.app/recipes/${id}`, {
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
    <div className="p-3 py-4 lg:p-6">
      <title>Recipe Details | RecipeBook</title>
      <h1 className="text-center font-semibold whitespace-nowrap text-xl md:text-2xl lg:text-3xl text-accent pb-2 lg:pb-4">
        <span className="font-extrabold">{likes}</span> People are interested in
        this recipe
      </h1>

      <div className="max-w-2xl lg:max-w-4xl mx-auto p-4 bg-white rounded-2xl shadow-xl space-y-2 md:space-y-3">
        <img
          src={image}
          alt={title}
          className="w-full h-60 lg:h-85 object-cover rounded-xl"
        />

        <h2 className="text-2xl lg:text-3xl font-bold text-accent">{title}</h2>

        <div className="flex items-center gap-3">
          <img
            src={photoURL}
            alt={displayName}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-lg lg:text-xl font-medium">{displayName}</p>
            <p className="lg:text-lg text-gray-500">{email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2 lg:text-lg text-gray-700">
          <p>
            <span className="text-lg lg:text-xl font-semibold">Cuisine:</span>
            {cuisineType}
          </p>
          <p>
            <span className="text-lg lg:text-xl font-semibold">Prep Time:</span>{" "}
            {prepTime}
            mins
          </p>
          <p>
            <span className="text-lg lg:text-xl font-semibold">Category:</span>
            {categories}
          </p>

          <div>
            <button
              onClick={() => handleLike(_id)}
              className={`btn flex items-center lg:text-lg items text-white px-5 border-none rounded  
                ${
                  user.email === email
                    ? "btn-disabled cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                }`}
            >
              <BiSolidLike className="flex items-center" size={18} /> Like :{" "}
              {likes}
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl lg:text-2xl font-semibold text-secondary">
            Ingredients :
          </h3>
          <p className="lg:text-lg text-gray-700">{ingredients}</p>
        </div>

        <div>
          <h3 className="text-xl lg:text-2xl font-semibold text-secondary">
            Instructions :
          </h3>
          <p className="lg:text-lg text-gray-700">{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
