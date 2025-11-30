import CustomButton from "./CustomButton";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen md:h-screen w-full md:snap-start bg-green flex flex-col items-center relative py-28"
    >
      <div className="container px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-8 text-center font-primary-family">
          My Projects
        </h2>
        <p className="text-dark/80 text-sm md:text-base text-center mb-10 max-w-2xl mx-auto font-primary-family">
          Selected work that reflects my focus on clarity, performance, and
          thoughtful user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group bg-green/20 rounded-2xl p-6 shadow-sm border border-orange/80 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg md:text-xl font-bold text-dark font-primary-family">
                  {p.title}
                </h3>
                <span className="text-yellow text-sm font-bold">★</span>
              </div>
              <p className="text-dark/80 text-sm md:text-base leading-relaxed mt-3 font-content-family">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4 font-content-family mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-dark text-yellow text-xs md:text-sm tracking-wide px-3 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <CustomButton text="View Project" link={p.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
