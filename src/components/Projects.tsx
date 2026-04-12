import CustomButton from "./CustomButton";
import { projects } from "../data/projects";
import { SECTION_IDS } from "../constants";

const Projects = () => {
  return (
    <div id={SECTION_IDS.PROJECTS} className="section-container bg-green">
      <div className="container lg:px-16">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A selection of high-impact, hands-on projects demonstrating strong engineering fundamentals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p) => (
            <div key={p.id} className="group card-hover flex flex-col h-full">
              <div className="flex items-start justify-between">
                <h3 className="card-title">{p.title}</h3>
                <span
                  className="text-orange text-sm font-bold"
                  aria-hidden="true"
                >
                  ★
                </span>
              </div>
              <p className="card-text mt-3">{p.description}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mt-4 font-content-family">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <CustomButton text="View Project" link={p.link} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
