import "./App.css";

import { Navbar } from "./layouts/NavBarAndFooter/Navbar";
import { Footer } from "./layouts/NavBarAndFooter/Footer";
import HomePage from "./layouts/HomePage/HomePage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
