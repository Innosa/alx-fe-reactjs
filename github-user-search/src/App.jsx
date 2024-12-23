import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search.jsx";

const App = () => {
  return (
    <Router>
      <>
        {/* Common UI components like Header */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Search />
        </main>
        {/* Common UI components like Footer */}
        <Footer />
      </>
    </Router>
  );
};

export default App;
