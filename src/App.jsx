import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Information from "./components/Information";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full overflow-y-scroll overflow-x-hidden md:snap-y md:snap-mandatory scroll-smooth">
        <Introduction />
        <Information />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default App;
