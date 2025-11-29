const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description:
        "Developing scalable web applications using React and TypeScript. Collaborating with cross-functional teams to deliver high-quality software.",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - 2023",
      description:
        "Built responsive and interactive user interfaces. Optimized application performance and ensured cross-browser compatibility.",
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - 2021",
      description:
        "Assisted in the development of MVP features. Gained hands-on experience with modern JavaScript frameworks and agile methodologies.",
    },
  ];

  return (
    <div
      id="experience"
      className="min-h-screen md:h-screen w-full md:snap-start bg-light flex flex-col items-center justify-center font-primary-family relative py-20 md:py-0"
    >
      <div className="container ">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-12 text-center">
          Experience
        </h2>
        <div className="relative border-l-4 border-orange ml-4 md:ml-auto md:mr-auto md:w-2/3 pl-8 md:pl-12 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              <div className="absolute w-6 h-6 bg-yellow rounded-full -left-[46px] md:-left-[62px] border-4 border-light top-1"></div>
              <h3 className="text-xl md:text-2xl font-bold text-dark">
                {exp.role}
              </h3>
              <span className="text-sm md:text-base text-orange font-bold mb-2 block">
                {exp.company} | {exp.period}
              </span>
              <p className="text-dark/80 text-sm lg:text-base leading-relaxed">
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
