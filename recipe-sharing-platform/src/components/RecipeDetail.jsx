import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe data
    fetch("/data.json") // Adjust path if necessary
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.recipes.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full rounded-lg mb-4 shadow-lg"
      />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc ml-5 mb-4 space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4 mt-6">Instructions</h2>
        <p className="text-gray-600 leading-relaxed">{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
