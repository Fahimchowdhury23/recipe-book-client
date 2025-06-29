import React, { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import AuthContext from "../Contexts/AuthContext";
import Loader from "../Components/Loader";
import Recharts from "./Recharts";

const Dashboard = () => {
  const recipesData = useLoaderData();
  const navigate = useNavigate();
  const { user, loading } = use(AuthContext);
  const [recipeLoading, setRecipeLoading] = useState(true);
  const [myRecipes, setMyRecipes] = useState([]);

  const createdTime = new Date(user?.metadata.creationTime).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "Asia/Dhaka",
    }
  );

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://recipe-book-server-alpha.vercel.app/recipes/user/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMyRecipes(data);
          setRecipeLoading(false);
        })
        .catch(() => {
          setRecipeLoading(false);
        });
    }
  }, [user, loading]);

  if (recipeLoading || loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="w-11/12 max-w-7xl mx-auto py-6">
      <h2 className="text-center md:text-start text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-3">
        Dashboard Overview :
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4 md:mb-5">
        <div
          onClick={() => navigate("/allRecipes")}
          className="bg-white cursor-pointer shadow-md rounded-xl p-5 text-center"
        >
          <h4 className="text-lg font-semibold text-gray-600">Total Recipes</h4>
          <p className="text-2xl lg:text-3xl font-bold text-primary">
            {recipesData.length}
          </p>
        </div>

        <div
          onClick={() => navigate(`/dashboard/myRecipes/${user?.email}`)}
          className="bg-white cursor-pointer shadow-md rounded-xl p-5 text-center"
        >
          <h4 className="text-lg font-semibold text-gray-600">My Recipes</h4>
          <p className="text-2xl lg:text-3xl font-bold text-primary">
            {myRecipes.length}
          </p>
        </div>

        <div className="bg-white cursor-pointer shadow-md rounded-xl p-5 text-center">
          <h4 className="text-lg font-semibold text-gray-600">Total Users</h4>
          <p className="text-2xl lg:text-3xl font-bold text-primary">3</p>
        </div>
      </div>

      <div className="justify-between mb-2 hidden lg:flex text-accent text-xl font-medium">
        <p>Profile Details :</p>
        <p>{user?.displayName}'s Recipes Chart :</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-3 ">
        <div className="bg-white rounded-2xl shadow-md p-4 lg:p-6 gap-5 w-full mx-auto">
          <div className="flex justify-center">
            <img
              src={user?.photoURL}
              alt="User Avatar"
              className="rounded-full w-24 h-24 object-cover border-2 border-primary"
            />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">
              {user?.displayName}
            </h3>
            <p className="text-gray-500">{user.email}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div>
              <h3>🗓️ Account Created:</h3>
              <p>{createdTime}</p>
            </div>

            <div>
              <h3>👤 Role/Status:</h3>
              <p>User</p>
            </div>

            <div>
              <h3>📞 Phone:</h3>
              <p>{user?.phoneNumber ? user?.phoneNumber : "Not Provided"}</p>
            </div>

            <div>
              <h3>🌍 Location:</h3>
              <p>Switzerland</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex lg:hidden text-accent md:text-2xl font-medium">
          {user?.displayName}'s Recipes Chart :
        </div>

        {/* Recharts of My Recipes */}

        <div
          onClick={() => navigate(`/dashboard/myRecipes/${user?.email}`)}
          className="min-h-[50vh] mid:min-h-full cursor-pointer"
        >
          <Recharts myRecipes={myRecipes}></Recharts>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
