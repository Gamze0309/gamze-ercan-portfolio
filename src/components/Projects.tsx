const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React, Tailwind CSS, and Vite.",
    tags: ["React", "Tailwind", "Vite"],
    link: "#",
  },
  {
    id: 2,
    title: "UI Components Library",
    description:
      "Reusable, elegant components focused on accessibility and performance.",
    tags: ["TypeScript", "Design Systems"],
    link: "#",
  },
  {
    id: 3,
    title: "Data Dashboard",
    description:
      "Interactive charts and insights with clean architecture and API-driven data.",
    tags: ["React", "Charts", "API"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen md:h-screen w-full md:snap-start bg-green flex flex-col items-center justify-center font-primary-family relative py-20 md:py-0"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-8 text-center">
          Projects
        </h2>
        <p className="text-dark/80 text-sm md:text-base text-center mb-10 max-w-2xl mx-auto">
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
                <h3 className="text-lg md:text-xl font-bold text-dark">
                  {p.title}
                </h3>
                <span className="text-yellow text-sm font-bold">★</span>
              </div>
              <p className="text-dark/80 text-sm md:text-base leading-relaxed mt-3">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-dark text-yellow text-xs md:text-sm tracking-wide px-3 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={p.link}
                  className="inline-block bg-dark text-light px-4 py-2 rounded-md hover:bg-orange hover:text-dark transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
