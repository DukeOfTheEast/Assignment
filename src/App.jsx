import "./App.css";
import Navbar from "../src/components/Navbar";
import Suitdiv from "./components/Suitdiv";
import Features from "./components/Features";
import About from "./components/About";
import Analysis from "./components/Analysis";
import Who from "./components/Who";
import Latest from "./components/Latest";
import Cons from "./components/Cons";
import Team from "./components/Team";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Suitdiv />
      <Features />
      <About />
      <Analysis />
      <Who />
      <Latest />
      <Cons />
      <Team />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
