import { skillsData } from "@/lib/constants";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse-gentle"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="opacity-0 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4 animate-bounce-gentle">
              My Tech Stack 🚀
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 opacity-0 animate-fade-in-up animate-stagger-1">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 opacity-0 animate-fade-in-up animate-stagger-2">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`group bg-slate-50/80 dark:bg-slate-700/80 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm border border-slate-200/50 dark:border-slate-600/50 opacity-0 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="relative">
                  <i 
                    className={`${category.icon} text-2xl mr-3 group-hover:animate-bounce-gentle`} 
                    style={{ color: category.color }}
                  ></i>
                  <div 
                    className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ backgroundColor: category.color }}
                  ></div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${skill.bgColor} ${skill.textColor} hover:scale-110 transition-all duration-300 cursor-default transform hover:rotate-2 hover:shadow-lg`}
                    style={{ 
                      animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` 
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-1/2 left-8 opacity-20 animate-rotate">
          <i className="fab fa-react text-4xl text-blue-500"></i>
        </div>
        <div className="absolute top-1/3 right-12 opacity-20 animate-float">
          <i className="fab fa-node-js text-4xl text-green-500"></i>
        </div>
        <div className="absolute bottom-1/4 left-1/4 opacity-20 animate-bounce-gentle">
          <i className="fab fa-python text-4xl text-yellow-500"></i>
        </div>
      </div>
    </section>
  );
}
