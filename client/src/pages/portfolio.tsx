import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-600 dark:text-slate-300 mb-4 md:mb-0">
              <p>&copy; 2025 Aditya Verma. All rights reserved.</p>
            </div>
            
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/aditya-verma-3096b3249" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-200">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/itsadityaaaaa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-gray-800 hover:text-white transition-all duration-200">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:csjma23001390179@csjmu.ac.in" className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-600 hover:text-white transition-all duration-200">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
