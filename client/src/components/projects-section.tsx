import { projectsData } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse-gentle"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="opacity-0 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-4 animate-bounce-gentle">
              Recent Work 💻
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 opacity-0 animate-fade-in-up animate-stagger-1">
            Featured Projects
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 opacity-0 animate-fade-in-up animate-stagger-2">
            Innovative solutions built with cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/80 dark:bg-slate-800/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 opacity-0 animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`lg:flex ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-56 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="lg:w-1/2 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <i className={`${project.icon} text-2xl`} style={{ color: project.iconColor }}></i>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 text-center"
                      >
                        <div className={`text-2xl font-bold ${metric.color}`}>
                          {metric.value}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${tech.bgColor} ${tech.textColor} hover:scale-105 transition-transform duration-200`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-primary-700 bg-[green]"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      {project.primaryButtonText}
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 border-2 border-slate-400 dark:border-slate-600 text-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:border-slate-600 dark:hover:border-slate-500 px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      <i className="fab fa-github"></i>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
