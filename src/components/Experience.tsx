import { experiences } from "../data/experiences";

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen md:h-screen w-full md:snap-start bg-light flex flex-col items-center relative py-28"
    >
      <div className="container md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-12 text-center font-primary-family">
          My Career Journey{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h2>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-green/20 rounded-2xl p-6 shadow-sm border border-orange/30"
            >
              <h3 className="text-lg md:text-xl font-bold text-dark font-primary-family">
                {exp.role}
              </h3>
              <span className="text-sm text-orange font-bold mb-2 block font-primary-family">
                {exp.company}
              </span>
              <span className="text-xs text-dark/70 mb-3 block font-content-family">
                {exp.period}
              </span>
              <p className="text-dark/80 text-sm leading-relaxed font-content-family">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
