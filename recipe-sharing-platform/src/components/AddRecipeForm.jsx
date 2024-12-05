import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingredientList = ingredients.split(",").map((item) => item.trim());
    // Validate form fields
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    if (ingredientList.length < 2) {
      setError("Ingredients must include at least two items.");
      return;
    }
    setError("");

    console.log({ title, ingredients, steps });
    // Add form s try {
    // Send data to the API
    const response = await fetch("https://your-api-endpoint.com/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // eslint-disable-next-line no-undef
      body: JSON.stringify(recipeData)
    });

    if (!response.ok) {
      throw new Error("Failed to submit recipe");
    }

    // Handle success
    const result = await response.json();
    console.log("Recipe submitted successfully:", result);
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter recipe title"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="List ingredients, separated by commas"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Describe the preparation steps"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
