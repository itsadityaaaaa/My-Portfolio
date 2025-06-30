import { experienceData, educationData, achievementsData } from "@/lib/constants";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-800 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/8 to-blue-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/8 to-orange-500/8 rounded-full blur-3xl animate-bounce-gentle"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="opacity-0 animate-fade-in-up">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 via-purple-100 to-pink-100 dark:from-primary-900/30 dark:via-purple-900/30 dark:to-pink-900/30 text-primary-700 dark:text-primary-300 rounded-full text-lg font-semibold mb-6 animate-glow shadow-lg">
              Professional Journey ✨
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 opacity-0 animate-fade-in-up animate-stagger-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 animate-gradient">
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto opacity-0 animate-fade-in-up animate-stagger-2">
            My transformative journey in technology, continuous learning, and professional growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div className="opacity-0 animate-slide-in-left animate-stagger-3">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center animate-pulse-gentle">
                <i className="fas fa-briefcase text-white text-sm"></i>
              </div>
              Professional Experience
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-emerald-500 animate-glow"></div>
              
              {experienceData.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative pl-16 pb-12 opacity-0 animate-scale-in`}
                  style={{ animationDelay: `${0.6 + (index * 0.2)}s` }}
                >
                  <div className="absolute left-4 w-6 h-6 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg animate-pulse-gentle"></div>
                  <div className="group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-slate-200/50 dark:border-slate-600/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <i className={`${exp.icon} ${exp.iconColor} text-3xl group-hover:animate-bounce-gentle`}></i>
                        <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-emerald-400"></div>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {exp.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                      <i className="fas fa-calendar-alt text-emerald-500"></i>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex} 
                          className={`flex items-start gap-3 opacity-0 animate-slide-in-left`}
                          style={{ animationDelay: `${0.8 + (index * 0.2) + (achIndex * 0.1)}s` }}
                        >
                          <div className="mt-1">
                            <i className="fas fa-star text-emerald-500 animate-pulse-gentle"></i>
                          </div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="opacity-0 animate-slide-in-right animate-stagger-4">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center animate-pulse-gentle">
                <i className="fas fa-graduation-cap text-white text-sm"></i>
              </div>
              Academic Foundation
            </h3>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div 
                  key={index} 
                  className={`group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-slate-200/50 dark:border-slate-600/50 backdrop-blur-sm opacity-0 animate-scale-in`}
                  style={{ animationDelay: `${1.0 + (index * 0.2)}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <i className={`${edu.icon} ${edu.iconColor} text-4xl group-hover:animate-bounce-gentle`}></i>
                      <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-blue-400"></div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <p className={`font-semibold text-lg ${edu.fieldColor}`}>{edu.field}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <i className="fas fa-university text-blue-500"></i>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-calendar-alt text-purple-500"></i>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                      {edu.period}
                    </p>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-20">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up animate-stagger-5">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 dark:from-yellow-900/30 dark:via-orange-900/30 dark:to-red-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-lg font-semibold mb-6 animate-glow shadow-lg">
              Recognition & Growth 🏆
            </span>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 animate-gradient">
                Achievements & Certifications
              </span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievementsData.map((achievement, index) => (
              <div
                key={index}
                className={`group rounded-2xl p-8 text-center transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${achievement.bgColor} border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm opacity-0 animate-scale-in`}
                style={{ animationDelay: `${1.5 + (index * 0.1)}s` }}
              >
                <div className="relative mb-6">
                  <i className={`${achievement.icon} text-5xl ${achievement.iconColor} group-hover:animate-bounce-gentle`}></i>
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-yellow-400"></div>
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {achievement.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {achievement.description}
                </p>
                
                {/* Sparkle effect on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-sparkles text-yellow-500 animate-pulse"></i>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Achievement Icons */}
        <div className="absolute top-3/4 right-8 opacity-10 animate-float">
          <i className="fas fa-trophy text-6xl text-yellow-500"></i>
        </div>
        <div className="absolute bottom-20 left-12 opacity-10 animate-bounce-gentle">
          <i className="fas fa-medal text-5xl text-orange-500"></i>
        </div>
      </div>
    </section>
  );
}
