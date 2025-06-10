
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Smartphone, Zap, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Learn HTML & CSS",
      description: "Master the building blocks of the web! We'll start with HTML structure and CSS styling to create beautiful layouts.",
      color: "blue"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "JavaScript Magic",
      description: "Add interactivity to your websites! Learn JavaScript to make buttons work, forms submit, and content dynamic.",
      color: "yellow"
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "Modern Design",
      description: "Create stunning visuals with modern CSS techniques, animations, and responsive design principles.",
      color: "purple"
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Database Integration",
      description: "Connect your websites to databases to store user data, posts, and more. We'll use modern tools to make it easy!",
      color: "green"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-600" />,
      title: "Mobile-First Design",
      description: "Ensure your websites look perfect on phones, tablets, and desktops with responsive design techniques.",
      color: "pink"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "User Experience",
      description: "Learn to create intuitive, user-friendly interfaces that people love to use and navigate.",
      color: "indigo"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
            🎯 Learning Path
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What You'll Master
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't worry if you're just starting out! We'll guide you through each concept step-by-step, 
            with lots of practice and encouragement along the way! 🌟
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-opacity-50 bg-white/80 backdrop-blur-sm"
              style={{
                '--hover-border-color': `var(--${feature.color}-200)`
              } as React.CSSProperties}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${feature.color}-200 transition-colors`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-sm">
            <span className="text-2xl mr-3">🚀</span>
            <span className="text-gray-700 font-medium">Ready to start your coding journey? Let's build something amazing together!</span>
          </div>
        </div>
      </div>
    </section>
  );
};
