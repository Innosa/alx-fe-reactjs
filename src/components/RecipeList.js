// RecipeList component
import useRecipeStore from "../stores/useRecipeStore"; // Adjusted the import path to match the likely directory structure

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes); // Correct hook usage for Zustand store

  return (
    <div>
      {recipes && recipes.length > 0 ? ( // Check if recipes exist and are not empty
        recipes.map(
          (
            recipe,
            index // Added 'index' fallback for key if 'recipe.id' is undefined
          ) => (
            <div key={recipe.id || index}>
              <h3>{recipe.title || "Untitled Recipe"}</h3>{" "}
              {/* Handle undefined 'title' */}
              <p>{recipe.description || "No description provided."}</p>{" "}
              {/* Handle undefined 'description' */}
            </div>
          )
        )
      ) : (
        <p>No recipes available. Add some to get started!</p> // Fallback UI when no recipes exist
      )}
    </div>
  );
};

export default RecipeList;
