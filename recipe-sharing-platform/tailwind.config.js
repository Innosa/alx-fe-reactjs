export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Define the paths to all template files
  darkMode: "media", // Enable dark mode based on the user's system preference
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Add a custom primary color
        secondary: "#F59E0B" // Add a custom secondary color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"] // Extend the default sans-serif font family
      },
      spacing: {
        128: "32rem", // Add custom spacing value
        144: "36rem" // Another custom spacing value
      }
    }
  },
  plugins: [
    // require("@tailwindcss/forms"), // Plugin to style form elements
    // require("@tailwindcss/typography") // Plugin to enhance typography
  ]
};
