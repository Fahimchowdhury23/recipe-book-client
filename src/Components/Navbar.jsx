import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
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

      <div className="flex gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
