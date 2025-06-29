import { FaRegImage } from "react-icons/fa";
import { MdTitle, MdTimer } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";
import toast from "react-hot-toast";
import { use } from "react";
import AuthContext from "../Contexts/AuthContext";
import { useNavigate } from "react-router";

const AddRecipe = () => {
  const { user, loading } = use(AuthContext);
  const navigate = useNavigate();
  const { displayName, photoURL, email } = user;
  const categoryOptions = ["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"];
  const cuisines = [
    "Italian",
    "Mexican",
    "Indian",
    "Chinese",
    "Greek",
    "Others",
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newRecipe = Object.fromEntries(formData.entries());

    const fullInfo = {
      displayName,
      photoURL,
      email,
      ...newRecipe,
      likeCount: 0,
    };

    fetch("https://recipe-book-server-alpha.vercel.app/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          toast.dismiss();
          toast.success("Recipe added Successfully!");
        }
        navigate(`/recipeDetails/${data.insertedId}`);
      });
  };

  return (
    <section>
      <title>Add a New Recipe | Recipe Book</title>
      <form
        onSubmit={handleFormSubmit}
        className="w-11/12 lg:w-8/12 mx-auto pb-5 flex flex-col gap-2 lg:gap-3"
      >
        <p className="w-10/12 text-xl md:text-2xl font-semibold mx-auto text-center text-accent/70">
          Add a New Recipe
        </p>
        <p className="border-b-2 w-2/3 md:w-1/2 mx-auto border-accent/70"></p>

        {/* Image URL */}
        <label className="flex items-center gap-2 text-accent/70">
          <FaRegImage size={24} /> Image URL
        </label>
        <input
          type="url"
          name="image"
          required
          placeholder="Image URL"
          className="px-3 md:px-4 md:py-3 py-2 rounded-xl bg-white text-primary placeholder-primary/70 focus:outline-none focus:ring-1 focus:ring-secondary"
        />

        {/* Title */}
        <label className="flex items-center gap-2 text-accent/70">
          <MdTitle size={24} /> Title
        </label>
        <input
          type="text"
          name="title"
          required
          placeholder="Recipe Title"
          className="px-3 md:px-4 md:py-3 py-2 rounded-xl bg-white text-primary placeholder-primary/70 focus:outline-none focus:ring-1 focus:ring-secondary"
        />

        {/* Ingredients */}

        <label className="flex items-center gap-2 text-accent/70">
          <GiKnifeFork size={24} /> Ingredients
        </label>
        <textarea
          name="ingredients"
          required
          placeholder="List ingredients separated by commas"
          className="p-3 md:px-4 py-3 rounded-xl bg-white text-primary placeholder-primary/70 focus:outline-none focus:ring-1 focus:ring-secondary [resize:none]"
          rows={3}
        />

        {/* Instructions */}

        <label className="flex items-center gap-2 text-accent/70">
          <PiBookOpenTextLight size={24} /> Instructions
        </label>
        <textarea
          name="instructions"
          required
          placeholder="Step-by-step preparation instructions"
          className="p-3 md:px-4 py-3 rounded-xl bg-white text-primary placeholder-primary/70 focus:outline-none focus:ring-1 focus:ring-secondary [resize:none]"
          rows={4}
        />

        {/* Cuisine Type */}

        <label className="text-accent/70">Cuisine Type</label>
        <select
          name="cuisineType"
          className="px-3 md:px-4 py-3  rounded-xl cursor-pointer bg-white text-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
        >
          {cuisines.map((type) => (
            <option
              className="bg-primary/50 md:text-lg text-secondary cursor-pointer"
              key={type}
            >
              {type}
            </option>
          ))}
        </select>

        {/* Preparation Time */}

        <label className="flex items-center gap-2 text-accent/70">
          <MdTimer size={24} /> Preparation Time (mins)
        </label>
        <input
          type="number"
          name="prepTime"
          min={0}
          max={60}
          required
          placeholder="E.g. 30"
          className="px-3 md:px-4 md:py-3 py-2 rounded-xl bg-white text-primary placeholder-primary/70 focus:outline-none focus:ring-1 focus:ring-secondary [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden [appearance:textfield]"
        />

        {/* Categories */}

        <label className="flex items-center gap-2 text-accent/70">
          <BiCategory size={24} /> Categories
        </label>
        <div className="flex flex-wrap gap-3">
          {categoryOptions.map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-accent/70">
              <input
                type="radio"
                name="categories"
                value={cat}
                className="accent-primary"
              />
              {cat}
            </label>
          ))}
        </div>

        {/* Add Recipe Button */}

        <button
          type="submit"
          className="w-full btn py-3 rounded-2xl border-1 border-accent text-lg bg-primary text-secondary font-medium transition backdrop-blur-xl"
        >
          {loading ? (
            <span className="loading loading-spinner text-secondary"></span>
          ) : (
            "Add Recipe"
          )}
        </button>
      </form>
    </section>
  );
};

export default AddRecipe;
