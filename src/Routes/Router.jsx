import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import AllRecipes from "../Pages/AllRecipes";
import MyRecipes from "../Pages/MyRecipes";
import AddRecipe from "../Pages/AddRecipe";
import Register from "../Pages/Register";
import Login from "../Pages/LogIn";
import AuthenticationLayout from "../Layout/AuthenticationLayout";
import ErrorPage from "../Components/ErrorPage";
import PrivateRoute from "../Provider/PrivateRoute";
import RecipeDetails from "../Pages/RecipeDetails";
import Loader from "../Components/Loader";
import Features from "../Pages/Features";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "allRecipes",
        loader: () =>
          fetch("https://recipe-book-server-alpha.vercel.app/recipes"),
        element: <AllRecipes></AllRecipes>,
        hydrateFallbackElement: <Loader></Loader>,
      },

      {
        path: "features",
        element: <Features></Features>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "addRecipe",
        element: (
          <PrivateRoute>
            <AddRecipe></AddRecipe>
          </PrivateRoute>
        ),
      },
      {
        path: "/myRecipes/:email",
        element: (
          <PrivateRoute>
            <MyRecipes></MyRecipes>
          </PrivateRoute>
        ),
      },
      {
        path: "/recipeDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://recipe-book-server-alpha.vercel.app/recipes/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <RecipeDetails></RecipeDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationLayout></AuthenticationLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },

      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
