import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { personalInfo } from "@/lib/constants";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500/8 to-blue-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-pink-500/8 to-purple-500/8 rounded-full blur-2xl animate-bounce-gentle"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="opacity-0 animate-fade-in-up">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 via-blue-100 to-cyan-100 dark:from-primary-900/30 dark:via-blue-900/30 dark:to-cyan-900/30 text-primary-700 dark:text-primary-300 rounded-full text-lg font-semibold mb-6 animate-glow shadow-lg">
              Let's Connect 📧
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 opacity-0 animate-fade-in-up animate-stagger-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-blue-600 to-cyan-600 animate-gradient">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 opacity-0 animate-fade-in-up animate-stagger-2">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="opacity-0 animate-slide-in-left animate-stagger-3">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg flex items-center justify-center animate-pulse-gentle">
                <i className="fas fa-handshake text-white text-sm"></i>
              </div>
              Let's Connect
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I'm always interested in new opportunities, whether it's a full-time role, 
              freelance project, or open source collaboration. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="group flex items-center gap-4 opacity-0 animate-slide-in-left" style={{animationDelay: '0.8s'}}>
                <div className="w-14 h-14 bg-gradient-to-r from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-envelope text-primary-600 dark:text-primary-400 text-xl group-hover:animate-bounce-gentle"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300">{personalInfo.email}</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 opacity-0 animate-slide-in-left" style={{animationDelay: '1.0s'}}>
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900 dark:to-green-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-phone text-emerald-600 dark:text-emerald-400 text-xl group-hover:animate-bounce-gentle"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-300">{personalInfo.phone}</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 opacity-0 animate-slide-in-left" style={{animationDelay: '1.2s'}}>
                <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fab fa-linkedin text-blue-600 dark:text-blue-400 text-xl group-hover:animate-bounce-gentle"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">LinkedIn</h4>
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                  >
                    aditya-verma-3096b3249
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 opacity-0 animate-slide-in-right animate-stagger-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-400 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-400 dark:hover:border-primary-500"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-400 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-400 dark:hover:border-primary-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-400 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-400 dark:hover:border-primary-500"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-400 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-400 dark:hover:border-primary-500"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 disabled:from-primary-400 disabled:to-purple-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-xl border-2 border-primary-500 hover:border-purple-500 hover:shadow-2xl bg-[blue]"
              >
                {contactMutation.isPending ? (
                  <>
                    <i className="fas fa-spinner animate-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
