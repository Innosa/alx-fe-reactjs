import React, { useState, useEffect } from "react";
import data from "../data.json"; // Adjust the path based on your folder structure

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Use the imported JSON data
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-6 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Recipe Sharing Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700 mb-4">{recipe.summary}</p>
              <a
                href={`/recipes/${recipe.id}`}
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
