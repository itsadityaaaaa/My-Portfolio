import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/constants";

export default function HeroSection() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Open Source Contributor",
    "Problem Solver",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const handleDownloadResume = () => {
    // Create a link to download the attached resume
    const link = document.createElement('a');
    link.href = '/attached_assets/ADITYA_VERMA.pdf';
    link.download = 'Aditya_Verma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 animate-gradient"></div>
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-gentle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl animate-bounce-gentle"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in-up">
            <div className="mb-6 opacity-0 animate-slide-in-left animate-stagger-1">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium animate-bounce-gentle">
                Welcome to my portfolio ✨
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in-up animate-stagger-2">
              <span className="text-slate-900 dark:text-white">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 animate-gradient">
                Aditya Verma
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 h-8 opacity-0 animate-slide-in-left animate-stagger-3">
              <span className="relative">
                <span className="border-r-2 border-primary-600 animate-pulse">
                  {currentText}
                </span>
                <span className="absolute -top-2 -right-2 w-2 h-2 bg-primary-500 rounded-full animate-ping"></span>
              </span>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed opacity-0 animate-fade-in-up animate-stagger-4">
              Full Stack Developer specializing in AI-powered solutions and open source contributions. 
              I build innovative web applications that solve real-world problems using modern technologies.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8 opacity-0 animate-slide-in-left animate-stagger-5">
              <a
                href={`tel:${personalInfo.phone}`}
                className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-phone group-hover:animate-bounce-gentle"></i>
                <span>{personalInfo.phone}</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-envelope group-hover:animate-bounce-gentle"></i>
                <span>{personalInfo.email}</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up animate-stagger-6">
              <button
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-glow bg-[blue]"
              >
                <span className="group-hover:animate-bounce-gentle">View Projects</span>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
              >
                <span className="group-hover:animate-bounce-gentle">Contact Me</span>
              </button>
              <button
                onClick={handleDownloadResume}
                className="group flex items-center gap-2 bg-slate-200/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <i className="fas fa-download group-hover:animate-bounce-gentle"></i>
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-200/80 dark:bg-slate-700/80 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 backdrop-blur-sm animate-bounce-gentle"
              >
                <i className="fab fa-linkedin-in group-hover:animate-pulse-gentle"></i>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-200/80 dark:bg-slate-700/80 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-12 backdrop-blur-sm animate-bounce-gentle"
              >
                <i className="fab fa-github group-hover:animate-pulse-gentle"></i>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative opacity-0 animate-slide-in-right">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Software development workspace"
                className="rounded-2xl shadow-2xl animate-float w-full h-auto transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
              />
              
              {/* Floating decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full opacity-20 animate-pulse-gentle blur-sm"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full opacity-30 animate-bounce-gentle blur-sm"></div>
              <div className="absolute top-1/4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-40 animate-float"></div>
              <div className="absolute bottom-1/3 -left-3 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-50 animate-pulse"></div>
              
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600/20 to-purple-600/20 blur-xl animate-glow"></div>
              
              {/* Code floating elements */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-slate-900/80 dark:bg-slate-100/80 text-emerald-400 dark:text-emerald-600 px-3 py-2 rounded-lg text-sm font-mono backdrop-blur-sm animate-slide-in-right">
                  const developer = "Aditya";
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="bg-slate-900/80 dark:bg-slate-100/80 text-blue-400 dark:text-blue-600 px-3 py-2 rounded-lg text-sm font-mono backdrop-blur-sm animate-slide-in-left">
                  skills.push("innovation");
                </div>
              </div>
            </div>
            
            {/* Tech stack floating icons */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-2 animate-float">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center animate-bounce-gentle">
                  <i className="fab fa-react text-blue-500 text-sm"></i>
                </div>
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center animate-bounce-gentle" style={{animationDelay: '0.2s'}}>
                  <i className="fab fa-node-js text-green-500 text-sm"></i>
                </div>
                <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center animate-bounce-gentle" style={{animationDelay: '0.4s'}}>
                  <i className="fab fa-js-square text-yellow-500 text-sm"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
