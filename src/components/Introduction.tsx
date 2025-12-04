import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/developer.json";
import { ROLE_ROTATION_INTERVAL, SECTION_IDS } from "../constants";

const ROLES = [
  "UI Enthusiast",
  "Problem Solver",
  "Principled Coder",
  "Team Player",
];

const Introduction = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, ROLE_ROTATION_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id={SECTION_IDS.INTRODUCTION}
      className="flex flex-col md:flex-row min-h-screen md:h-screen w-full md:snap-start font-primary-family"
    >
      <div className="flex w-full md:w-1/3 h-64 md:h-full bg-yellow items-center justify-center mt-20 md:mt-0">
        <Lottie
          animationData={animationData}
          loop
          aria-label="developer-animation"
        />
      </div>
      <div className="w-full md:w-2/3 flex-1 md:h-full bg-light flex flex-col justify-center px-6 sm:px-4 lg:px-12 gap-6 md:overflow-hidden md:pt-12">
        <h1 className="text-dark font-bold text-lg md:text-5xl sm:text-2xl leading-tight">
          Gamze - Software engineer focused on clean execution, predictable
          behavior, and reliable results.
        </h1>
        <p className="text-dark font-bold text-sm md:text-base mt-8">
          Frontend Developer • Full-Stack Developer • React • Next.js •
          JavaScript • TypeScript •{" "}
          <span className="bg-dark text-yellow px-2 py-1 rounded">
            {ROLES[roleIndex]}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
