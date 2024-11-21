// import { useState } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
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
