import React, { use } from "react";
import { useLoaderData } from "react-router";
import AuthContext from "../Contexts/AuthContext";

const Dashboard = () => {
  const recipesData = useLoaderData();
  const { user } = use(AuthContext);

  return (
    <div className="w-11/12 max-w-7xl mx-auto py-6">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-8">
        🍽️ Welcome {user.displayName} to Your Recipe Dashboard
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h4 className="text-lg font-semibold text-gray-600">Total Recipes</h4>
          <p className="text-3xl font-bold text-primary">
            {recipesData.length}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h4 className="text-lg font-semibold text-gray-600">
            Total Cuisines
          </h4>
          <p className="text-3xl font-bold text-primary">6</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h4 className="text-lg font-semibold text-gray-600">Total Users</h4>
          <p className="text-3xl font-bold text-primary">3</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
