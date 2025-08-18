import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { resumeData } from "@/data/resume-data";

const Experience = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "current":
        return "bg-emerald-500/20 text-emerald-400";
      case "previous":
        return "bg-blue-500/20 text-blue-400";
      case "early-career":
        return "bg-orange-500/20 text-orange-400";
      default:
        return "bg-slate-500/20 text-slate-400";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "current":
        return "Current";
      case "previous":
        return "Previous";
      case "early-career":
        return "Early Career";
      default:
        return "Previous";
    }
  };

  const getTimelineColor = (index: number) => {
    return index === 0 ? "bg-cyan-bright animate-pulse" : "bg-blue-electric";
  };

  return (
    <section id="experience" className="py-20 px-4 bg-dark-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
            Experience
          </h2>
          <p className="text-slate-400">
            My professional journey in mobile development
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-bright to-blue-electric" />
          
          {resumeData.experience.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center mb-12">
              {/* Timeline dot */}
              <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-dark-primary ${getTimelineColor(index)}`} />
              
              {/* Experience card */}
              <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-12' : 'md:w-1/2 md:ml-auto md:pl-12'}`}>
                <Card className="bg-dark-card border-dark-accent hover-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exp.status)}`}>
                        {getStatusLabel(exp.status)}
                      </span>
                      <span className="text-slate-400 text-sm" data-testid={`experience-period-${exp.id}`}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-cyan-bright mb-2" data-testid={`experience-role-${exp.id}`}>
                      {exp.role}
                    </h3>
                    
                    <p className="text-slate-300 font-medium mb-3" data-testid={`experience-company-${exp.id}`}>
                      {exp.company} • {exp.location}
                    </p>
                    
                    <ul className="text-slate-400 space-y-2 text-sm">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <ChevronRight className="h-3 w-3 text-cyan-bright mr-2 mt-1 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
