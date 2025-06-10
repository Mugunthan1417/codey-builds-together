
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Mail, Code, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success("Thanks for reaching out! 🎉 I'd love to help you start coding!");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-200">
            💬 Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Start Coding!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to begin your web development journey? I'm here to help you every step of the way! 
            Drop me a message and let's create something awesome together! ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Let's Chat!</CardTitle>
                    <CardDescription>Ask me anything about web development</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Learn Together</CardTitle>
                    <CardDescription>From beginner to pro - we'll make it fun!</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Supportive Learning</CardTitle>
                    <CardDescription>No question is too small - I'm here to help!</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <Mail className="w-6 h-6 mr-2 text-blue-600" />
                Send me a message!
              </CardTitle>
              <CardDescription>
                Tell me about your coding goals and I'll help you get started! 🚀
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your name (so I know how to greet you! 👋)"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-2 focus:border-blue-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your email address 📧"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-2 focus:border-blue-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your coding dreams! What would you like to build? 💭✨"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-2 focus:border-blue-400 transition-colors min-h-[100px]"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message 🚀
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
