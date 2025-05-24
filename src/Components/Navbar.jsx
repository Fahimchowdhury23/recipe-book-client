import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../Contexts/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("You've logged out successfully!", {
          className: "text-center",
        });
        navigate("/auth/login");
      })
      .catch((error) => {
        toast.error("Something went wrong", error?.message);
      });
  };

  return (
    <div className="navbar p-3 flex justify-around border-1 border-[#d8afa9] shadow-sm">
      <div className="flex items-center gap-1">
        <Link to="/">
          <img
            className="w-14 h-14 cursor-pointer"
            src="https://i.ibb.co/sdgpf1pV/illustration-cooking-logo-solid-background-852896-5161-removebg-preview.png"
            alt=""
          />
        </Link>
        <Link to="/">
          <h1 className="text-3xl font-bold cursor-pointer text-[#5B4141]">
            Recipe Book
          </h1>
        </Link>
      </div>

      <div className="flex text-xl font-medium items-center text-[#4A3F3F] gap-3">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/allRecipes">
          All Recipes
        </NavLink>
        <NavLink className="nav-link" to="/addRecipe">
          Add Recipe
        </NavLink>
        <NavLink className="nav-link" to="/myRecipes">
          My Recipes
        </NavLink>
      </div>

      {user ? (
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar avatar-online"
            >
              <div className="w-12 rounded-full">
                <img alt={user?.displayName} src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-primary text-lg rounded-box z-1 mt-3 w-52 p-2"
            >
              <li>
                <a>{user?.displayName}</a>
              </li>
              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link to="/auth/login">
            <button className="text-[#7B3F00] lg:text-lg btn bg-primary rounded-full p-3 lg:p-5 border-none font-bold">
              Login
            </button>
          </Link>
          <Link to="/auth/register">
            <button className="text-[#7B3F00] lg:text-lg btn bg-primary rounded-full p-3 lg:p-5 border-none font-bold">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
