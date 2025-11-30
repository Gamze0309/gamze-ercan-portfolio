import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Information from "./components/Information";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div
        id="scroll-container"
        className="h-screen w-full overflow-y-scroll overflow-x-hidden md:snap-y md:snap-mandatory scroll-smooth"
      >
        <Introduction />
        <Information />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
