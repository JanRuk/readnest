import "./App.css";
import { Carousel } from "./layouts/HomePage/Carousel";
import ExploreTopBooks from "./layouts/HomePage/ExploreTopBooks";
import Navbar from "./layouts/NavBarAndFooter/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </>
  );
}

export default App;
