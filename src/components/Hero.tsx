
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Code2 } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 text-sm font-medium">
          ✨ Welcome to Web Development!
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Build
          </span>
          <br />
          <span className="text-gray-900">Something Amazing!</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Hi there! 👋 I'm Codey, your friendly coding companion! Together, we'll learn web development 
          step-by-step and create beautiful, functional websites. No experience needed - just bring your curiosity! 🚀
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => scrollToSection('features')}
          >
            Start Learning 🎯
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
            onClick={() => scrollToSection('projects')}
          >
            <Code2 className="mr-2 w-5 h-5" />
            View Projects
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold text-gray-900 mb-2">Beautiful Design</h3>
            <p className="text-gray-600 text-sm">Learn to create stunning, responsive websites that look great on any device</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">Interactive Features</h3>
            <p className="text-gray-600 text-sm">Add dynamic functionality with modern JavaScript and React</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">🗄️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Database Power</h3>
            <p className="text-gray-600 text-sm">Connect your websites to databases to store and manage data</p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};
