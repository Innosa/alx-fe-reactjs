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

// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useParams
// } from "react-router-dom";
// import RecipeList from "./components/RecipeList.jsx";
// import RecipeDetails from "./components/RecipeDetails.jsx";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<RecipeList />} />
//         <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
//       </Routes>
//     </Router>
//   );
// };

// // Wrapper to extract `recipeId` from URL
// const RecipeDetailsWrapper = () => {
//   const { id } = useParams();
//   return <RecipeDetails recipeId={id} />;
// };

// export default App;
