import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const sections = ["information", "experience", "projects", "contact"];
    const navbarOffset = 150;

    const onScroll = () => {
      const scrollPos = container.scrollTop + navbarOffset;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(sections[i]);
          return;
        }
        setActive("");
      }
    };

    onScroll();
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full py-6 lg:px-16 sm:px-12 flex justify-between items-center z-50">
      <div
        className={`text-4xl font-extrabold cursor-pointer font-logo-family text-stroke text-shadow-bottom transition-colors ${
          active === "information" || active === "projects"
            ? "text-light"
            : "text-green"
        }`}
        onClick={() => scrollToSection("introduction")}
      >
        GAMZE
      </div>
      <div className="flex gap-6 md:gap-8">
        <button
          onClick={() => scrollToSection("information")}
          className={`text-sm md:text-lg text-dark hover:text-orange transition-colors ${
            active === "information" ? "border-b-2 border-orange" : ""
          }`}
        >
          Information
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className={`text-sm md:text-lg text-dark hover:text-orange transition-colors ${
            active === "experience" ? "border-b-2 border-orange" : ""
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={`text-sm md:text-lg text-dark hover:text-orange transition-colors ${
            active === "projects" ? "border-b-2 border-orange" : ""
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`text-sm md:text-lg text-dark hover:text-orange transition-colors ${
            active === "contact" ? "border-b-2 border-orange" : ""
          }`}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
