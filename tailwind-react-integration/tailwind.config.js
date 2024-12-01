/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  safelist: ["sm:p-4", "md:p-8"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: { extend: {} },
  variants: { extend: {} },
  plugins: []
};
