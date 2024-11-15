// import React from "react";
// import UserProvider from "./UserContext";
import ProfilePage from "./components/ProfilePage.jsx";
import { UserProvider } from "./context/UserContext.js";
// import UserProfile from "./components/UserProfile.jsx";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";
// import WelcomeMessage from ".components/WelcomeMessage.jsx";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const userData = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
  };

  return (
    <UserProvider userData={userData}>
      <ProfilePage />
    </UserProvider>
  );
};
export default App;

// function App() {
//   // const [count, setCount] = useState(0);

//   return (
//     <>
//       {/* <div>
//         <UserProfile
//           name="Innocent"
//           age="50"
//           bio="Loves hiking and photography"
//         />
//       </div> */}
//       {/* <div>
//         <WelcomeMessage />
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div> */}
//       {/* <h1>Vite + React</h1> */}
//       <div className="card">
//         {/* <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button> */}
//         {/* <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p> */}
//       </div>
//       {/* <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <p><WelcomeMessage /></p> */}
//     </>
//   );
// }

// export default App;
