// import { useState } from "react";
import RecipeList from "./components/RecipeList.jsx";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
      <div></div>
    </>
  );
}

export default App;
