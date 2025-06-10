
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Rocket, Users, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      <Hero />
      <Features />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
              🚀 My Projects
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What We Can Build Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple websites to complex web applications - let's create something amazing! 🎨
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Personal Portfolio</CardTitle>
                <CardDescription>
                  Showcase your skills and projects with a beautiful, responsive portfolio website
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Database-Driven App</CardTitle>
                <CardDescription>
                  Learn to build apps that store and retrieve data - perfect for learning backend concepts!
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-200">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Social Platform</CardTitle>
                <CardDescription>
                  Create interactive social features like user profiles, posts, and real-time updates
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <Code className="w-8 h-8 text-blue-400 mr-2" />
            <span className="text-2xl font-bold">Codey's Web Dev Journey</span>
          </div>
          <p className="text-gray-400 mb-6">
            Building amazing websites together, one line of code at a time! 🚀✨
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>Made with ❤️ and lots of coffee ☕</span>
            <span>•</span>
            <span>Let's code something awesome!</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
