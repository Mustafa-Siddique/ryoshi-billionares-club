import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import NFTs from "./components/NFTs";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <About/>
      <Features/>
      <NFTs/>
      <Roadmap/>
      <Contact/>
    </div>
  );
}

export default App;
