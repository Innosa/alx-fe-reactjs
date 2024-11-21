// import { useState } from "react";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <h1>Recipe Manager</h1>
        <AddRecipeForm />
        <RecipeList />
      </div>
    </>
  );
};

export default App;
