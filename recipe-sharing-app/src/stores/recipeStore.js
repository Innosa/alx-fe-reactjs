import create from "zustand";
const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;

// import { create } from "zustand";

// const useRecipeStore = create((set) => ({
//   recipes: [],
//   // Add a new recipe
//   addRecipe: (newRecipe) =>
//     set((state) => ({ recipes: [...state.recipes, newRecipe] })),

//   // Delete a recipe by ID
//   deleteRecipe: (recipeId) =>
//     set((state) => ({
//       recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
//     })),

//   // Update a recipe by ID
//   updateRecipe: (updatedRecipe) =>
//     set((state) => ({
//       recipes: state.recipes.map((recipe) =>
//         recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//       )
//     }))
// }));

// export default useRecipeStore;
