import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Rocket, 
  Bug, 
  Users, 
  GraduationCap,
  Code,
  Coffee,
  Smartphone,
  Database,
  Settings,
  Zap
} from "lucide-react";
import { resumeData } from "@/data/resume-data";
import profileImage from "@assets/IMG-20180318-WA0003-EDIT_1755492662218.jpg";

const About = () => {
  const skillIcons = {
    "Dart": Code,
    "Java": Coffee,
    "Python": Code,
    "JavaScript": Code,
    "Flutter": Smartphone,
    "Firebase": Database,
    "Provider": Settings,
    "BLoC": Settings,
    "MobX": Settings,
  };

  const achievementIcons = [
    TrendingUp,
    Rocket,
    Bug,
    Users,
    GraduationCap
  ];

  return (
    <section id="about" className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
            About Me
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Passionate about creating exceptional mobile experiences with cutting-edge technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-dark-card border-dark-accent hover-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-bright">
                  Professional Summary
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {resumeData.personal.summary}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-card border-dark-accent hover-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-bright">
                  Key Achievements
                </h3>
                <ul className="space-y-2 text-slate-300">
                  {resumeData.achievements.map((achievement, index) => {
                    const Icon = achievementIcons[index] || Zap;
                    return (
                      <li key={index} className="flex items-center">
                        <Icon className="h-4 w-4 text-emerald-400 mr-3 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-dark-card border-dark-accent hover-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-bright">
                  Technical Skills
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-slate-200">
                      Languages & Frameworks
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[...resumeData.skills.languages, ...resumeData.skills.frameworks].map((skill) => {
                        const Icon = skillIcons[skill as keyof typeof skillIcons] || Code;
                        return (
                          <div key={skill} className="flex items-center space-x-2">
                            <Icon className="h-4 w-4 text-blue-electric" />
                            <span className="text-slate-300">{skill}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-slate-200">
                      State Management
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.stateManagement.map((skill) => (
                        <span
                          key={skill}
                          className="bg-dark-accent text-cyan-bright px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-slate-200">
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="bg-dark-accent text-cyan-bright px-3 py-1 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-slate-200">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-dark-accent text-cyan-bright px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
