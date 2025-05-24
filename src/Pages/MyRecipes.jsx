import React from "react";
import { useLoaderData } from "react-router";

const MyRecipes = () => {
  const myData = useLoaderData();
  console.log(myData);
  return (
    <div>
      <h1>my</h1>
    </div>
  );
};

export default MyRecipes;
