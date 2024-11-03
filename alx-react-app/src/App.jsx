import React from "react";
import Header from "./Header.jsx";
import Maincontent from "./MainContent.jsx";
import Footer from "./Footer.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Maincontent />
        <Footer />
      </div>
    </>
  );
}

export default App;
