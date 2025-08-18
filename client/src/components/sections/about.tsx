import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Rocket,
  Bug,
  Users,
  GraduationCap,
  Zap
} from "lucide-react";
import { resumeData } from "@/data/resume-data";

const About = () => {
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

        <div className="max-w-4xl mx-auto space-y-8">
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
      </div>
    </section>
  );
};

export default About;
