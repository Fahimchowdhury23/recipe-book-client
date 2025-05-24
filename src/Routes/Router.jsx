import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import AllRecipes from "../Pages/AllRecipes";
import MyRecipes from "../Pages/MyRecipes";
import AddRecipe from "../Pages/AddRecipe";
import Register from "../Pages/Register";
import Login from "../Pages/LogIn";
import AuthenticationLayout from "../Layout/AuthenticationLayout";

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
        element: <AllRecipes></AllRecipes>,
      },
      {
        path: "addRecipe",
        element: <AddRecipe></AddRecipe>,
      },
      {
        path: "myRecipes",
        element: <MyRecipes></MyRecipes>,
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
]);

export default router;
