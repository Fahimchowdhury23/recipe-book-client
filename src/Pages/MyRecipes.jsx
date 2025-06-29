import React, { use, useEffect, useState } from "react";
import AuthContext from "../Contexts/AuthContext";
import Loader from "../Components/Loader";
import MyRecipeCard from "./MyRecipeCard";
import toast from "react-hot-toast";
import { FaRegImage } from "react-icons/fa";
import { MdTimer, MdTitle } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import Swal from "sweetalert2";
import { FaXmark } from "react-icons/fa6";

const MyRecipes = () => {
  const { user, loading } = use(AuthContext);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeLoading, setRecipeLoading] = useState(true);
  const [myData, setMyData] = useState([]);
  const categoryOptions = ["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"];
  const cuisines = [
    "Italian",
    "Mexican",
    "Indian",
    "Chinese",
    "Greek",
    "Others",
  ];

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://recipe-book-server-alpha.vercel.app/recipes/user/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMyData(data);
          setRecipeLoading(false);
        })
        .catch(() => {
          setRecipeLoading(false);
        });
    }
  }, [user, loading]);

  const closeModal = () => {
    document.getElementById("my_modal_5").close();
    setSelectedRecipe(null);
  };

  useEffect(() => {
    if (selectedRecipe) {
      document.getElementById("my_modal_5").showModal();
    }
  }, [selectedRecipe]);

  const handleFormUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedRecipe = Object.fromEntries(formData.entries());

    fetch(
      `https://recipe-book-server-alpha.vercel.app/recipes/${selectedRecipe._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("my_modal_5").close();
        setSelectedRecipe(null);

        if (data.modifiedCount) {
          toast.dismiss();
          toast.success("Recipe updated Successfully!", {
            style: {
              background: "green",
              color: "white",
            },
          });
          window.location.reload(); // to refresh the page after updating recipes
        } else {
          toast.dismiss();
          toast.error("No changes has been made");
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#7b3f00",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://recipe-book-server-alpha.vercel.app/recipes/user/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then(() => {
            const remainingData = myData.filter((data) => data._id !== id);
            setMyData(remainingData);

            Swal.fire({
              title: "Deleted!",
              text: "Your recipe has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => console.error(error));
      }
    });
  };

  if (recipeLoading || loading) {
    return <Loader></Loader>;
  }

  return (
    <section className="pb-5">
      <title>My Recipe | Recipe Book</title>
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-secondary drop-shadow">
        My Recipes
      </h2>
      <p className="border-b-3 w-2/5 md:w-1/4 mx-auto border-accent/70 mb-3 lg:mb-5"></p>

      {myData.length === 0 && (
        <div className="flex justify-center items-center min-h-[40vh] md:min-h-[60vh] text-xl md:text-2xl lg:text-3xl font-medium text-secondary drop-shadow">
          <h2>
            There is no <span className="font-bold">Recipe</span> added yet!
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-4 w-11/12 mx-auto">
        {/* user added recipe */}

        {myData.map((recipe) => (
          <MyRecipeCard
            key={recipe._id}
            recipe={recipe}
            handleDelete={handleDelete}
            setSelectedRecipe={setSelectedRecipe}
          ></MyRecipeCard>
        ))}

        {/* Update recipe form */}

        {selectedRecipe && (
          <div>
            <dialog id="my_modal_5" className="modal modal-middle">
              <div className="modal-box border-2 border-accent/70 rounded-2xl">
                <p
                  onClick={closeModal}
                  className="flex justify-end cursor-pointer text-accent/70 relative"
                >
                  <span className="hover:bg-accent/20 left-[423.2px] w-6 -top-[2.6px] rounded-full absolute">
                    {"\u00A0\u00A0\u00A0"}
                  </span>
                  <FaXmark className="hover:rounded-full" size={20} />
                </p>
                <div>
                  <form
                    onSubmit={handleFormUpdate}
                    className="w-full py-0 flex flex-col gap-3"
                  >
                    <p className="text-xl font-semibold text-center text-accent/70">
                      Update Recipe
                    </p>
                    <p className="border-b-2 mb-2 border-accent/70"></p>

                    {/* Image URL Field */}

                    <label className="flex items-center gap-2 text-accent/70">
                      <FaRegImage size={24} /> Image URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      defaultValue={selectedRecipe?.image}
                      placeholder="Enter image URL"
                      className="px-4 py-3 border border-accent rounded-xl bg-white text-primary placeholder-primary/70 focus:outline-none focus:ring-1 focus:ring-secondary"
                    />

                    {/* Title */}
                    <label className="flex items-center gap-2 text-accent/70">
                      <MdTitle size={24} /> Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={selectedRecipe?.title}
                      placeholder="Recipe Title"
                      className="px-4 py-3 border border-accent rounded-xl bg-white text-primary placeholder-primary/70 focus:outline-none focus:ring-1 focus:ring-secondary"
                    />

                    {/* Ingredients */}

                    <label className="flex items-center gap-2 text-accent/70">
                      <GiKnifeFork size={24} /> Ingredients
                    </label>
                    <textarea
                      name="ingredients"
                      defaultValue={selectedRecipe?.ingredients}
                      placeholder="List ingredients separated by commas"
                      className="px-4 py-3 border border-accent rounded-xl bg-white text-primary placeholder-primary/70 focus:outline-none focus:ring-1 focus:ring-secondary [resize:none]"
                      rows={3}
                    />

                    {/* Instructions */}

                    <label className="flex items-center gap-2 text-accent/70">
                      <PiBookOpenTextLight size={24} /> Instructions
                    </label>
                    <textarea
                      name="instructions"
                      defaultValue={selectedRecipe?.instructions}
                      placeholder="Step-by-step preparation instructions"
                      className="px-4 py-3 border border-accent rounded-xl bg-white text-primary placeholder-primary/70 focus:outline-none focus:ring-1 focus:ring-secondary [resize:none]"
                      rows={3}
                    />

                    {/* Cuisine Type */}

                    <label className="flex items-center gap-2 text-accent/70">
                      Cuisine Type
                    </label>
                    <select
                      name="cuisineType"
                      defaultValue={selectedRecipe?.cuisineType}
                      className="px-4 py-3 border border-accent rounded-xl bg-white text-primary focus:outline-none focus:ring-1 focus:ring-secondary"
                    >
                      {cuisines.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>

                    {/* Preparation Time */}

                    <label className="flex items-center gap-2 text-accent/70">
                      <MdTimer size={24} /> Preparation Time (mins)
                    </label>
                    <input
                      type="number"
                      name="prepTime"
                      defaultValue={selectedRecipe?.prepTime}
                      placeholder="E.g. 30"
                      className="px-4 py-3 border border-accent rounded-xl bg-white text-primary placeholder-primary/70 focus:outline-none focus:ring-1 focus:ring-secondary [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden [appearance:textfield]"
                    />

                    {/* Categories */}

                    <label className="flex items-center gap-2 text-accent/70">
                      <BiCategory size={24} /> Categories
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {categoryOptions.map((cat) => (
                        <label
                          key={cat}
                          className="flex items-center gap-2 text-accent/70"
                        >
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

                    {/* Update Recipe Button */}

                    <button
                      type="submit"
                      className="w-full btn py-3 rounded-2xl border-none text-lg bg-primary text-secondary font-medium transition backdrop-blur-xl"
                    >
                      {loading ? (
                        <span className="loading loading-spinner text-secondary"></span>
                      ) : (
                        "Update Recipe"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyRecipes;
