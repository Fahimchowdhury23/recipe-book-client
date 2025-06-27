import React from "react";
import { Link, Outlet, useNavigation } from "react-router";
import ScrollToTop from "../Components/ScrollToTop";
import { GiHamburgerMenu } from "react-icons/gi";
import Loader from "../Components/Loader";

const DashboardLayout = () => {
  const { state } = useNavigation();

  return (
    <section className="bg-gradient-to-b min-h-screen from-bg-base-100 to-primary">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pl-4 pt-4">
          {/* Page content here */}

          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            <GiHamburgerMenu></GiHamburgerMenu>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-primary text-black/80 text-lg md:text-xl font-semibold min-h-full w-50 md:w-60 lg:w-80 md:p-4">
            {/* Sidebar content here */}
            <li>
              <Link to="/">Back to Home</Link>
            </li>

            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a>All Recipes</a>
            </li>
            <li>
              <Link to="/dashboard/addRecipe">Add Recipe</Link>
            </li>
            <li>
              <a>My Recipes</a>
            </li>
          </ul>
        </div>
      </div>

      <main className="">
        <ScrollToTop></ScrollToTop>
        {state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </main>
    </section>
  );
};

export default DashboardLayout;
