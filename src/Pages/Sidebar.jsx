import React, { use, useEffect } from "react";
import AuthContext from "../Contexts/AuthContext";
import { Link, NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { BiLogOut } from "react-icons/bi";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Sidebar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  // only for tablet and desktop view

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
      document.getElementById("my-drawer").checked = true;
    }
  }, []);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5B4141",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        // Signing Out

        signOutUser()
          .then(() => {
            toast.dismiss();
            toast.success("You've logged out successfully!", {
              className: "text-center",
            });
            navigate("/auth/login");
          })
          .catch((error) => {
            toast.dismiss();
            toast.error("Something went wrong", error?.message);
          });
      }
    });
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content pl-4 pt-4">
        <label
          htmlFor="my-drawer"
          className="btn bg-green-500 border-0 p-3 drawer-button"
        >
          <TbLayoutSidebarLeftExpand size={24} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-primary text-black/80 text-lg md:text-xl font-medium min-h-full w-50 md:w-60 lg:w-80 md:p-4">
          {/* Sidebar content here */}

          <p className="p-3 pb-1 text-2xl text-bold">Dashboard</p>
          <p className="border-b-3 w-full lg:w-9/12 border-accent/70 mb-2 md:mb-4"></p>

          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-1.5">
              <li>
                <NavLink
                  to="/"
                  className="hover:bg-secondary active:!bg-secondary hover:text-white active:!text-white focus:!outline-none"
                >
                  <IoArrowBackCircleOutline size={28} /> Back to Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={() =>
                    (document.getElementById("my-drawer").checked = false)
                  }
                  to="/dashboard"
                  className="hover:bg-secondary active:!bg-secondary hover:text-white active:!text-white focus:!outline-none"
                >
                  Overview
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={() =>
                    (document.getElementById("my-drawer").checked = false)
                  }
                  to="/dashboard/addRecipe"
                  className="hover:bg-secondary active:!bg-secondary hover:text-white active:!text-white focus:!outline-none"
                >
                  Add Recipe
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={() =>
                    (document.getElementById("my-drawer").checked = false)
                  }
                  to={`/dashboard/myRecipes/${user?.email}`}
                  className="hover:bg-secondary active:!bg-secondary hover:text-white active:!text-white focus:!outline-none"
                >
                  My Recipes
                </NavLink>
              </li>
            </div>

            <div>
              <div className="flex items-end mb-4">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-3 mb-0 btn-ghost btn-circle avatar avatar-online"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt={user?.displayName} />
                  </div>
                </div>

                <div>
                  <li>
                    <a
                      onClick={() => {
                        navigate(`/dashboard/myRecipes/${user?.email}`)(
                          (document.getElementById("my-drawer").checked = false)
                        );
                      }}
                      className="px-0 hover:bg-transparent active:!text-white hover:text-white focus:!outline-none active:!bg-transparent"
                    >
                      {user?.displayName}
                    </a>
                  </li>
                </div>
              </div>

              <li className="pl-4">
                <button
                  className="btn bg-red-600 hover:bg-red-700 text-white shadow-sm border-0 w-3/5 md:w-1/2 lg:w-2/5"
                  onClick={handleSignOut}
                >
                  <BiLogOut size={22} /> Logout
                </button>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
