// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Card from "./components/card";
// import responsiveTypography from "./components/responsive_typography.jsx";
// import ResponsiveLayout from "./components/responsive_layerout.jsx";
import "./index.css";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="flex justify-center items-center h-screen bg-gray-50">
        <Card />
      </div> */}
      {/* <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <responsiveTypography />
      </div> */}
      {/* <div className="min-h-screen flex justify-center items-center bg-gray-50">b 
        <responsiveTypography />
      </div> */}
      {/* <ResponsiveLayout /> */}

      <div className="bg-gray-100">This is a React app with tailwind</div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {/*  */}
    </>
  );
}

export default App;