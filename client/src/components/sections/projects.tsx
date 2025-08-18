import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Music, 
  ShoppingCart, 
  Stethoscope, 
  University, 
  CheckSquare,
  ExternalLink,
  TrendingUp,
  Users,
  Smartphone,
  CalendarCheck,
  School,
  RotateCcw
} from "lucide-react";
import { resumeData } from "@/data/resume-data";

const Projects = () => {
  const projectIcons = {
    "graduation-cap": GraduationCap,
    "music": Music,
    "shopping-cart": ShoppingCart,
    "stethoscope": Stethoscope,
    "university": University,
    "tasks": CheckSquare,
  };

  const metricIcons = {
    "Multi-platform": Smartphone,
    "50K+ Users": TrendingUp,
    "B2B/B2C": ShoppingCart,
    "Appointments": CalendarCheck,
    "Students": School,
    "Offline Support": RotateCcw,
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: "from-cyan-bright/20 to-blue-electric/20 text-cyan-bright",
      purple: "from-purple-500/20 to-pink-500/20 text-purple-400",
      emerald: "from-green-500/20 to-emerald-500/20 text-emerald-400",
      red: "from-red-500/20 to-pink-500/20 text-red-400",
      indigo: "from-indigo-500/20 to-blue-500/20 text-indigo-400",
      orange: "from-orange-500/20 to-yellow-500/20 text-orange-400",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <section id="projects" className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
            Featured Projects
          </h2>
          <p className="text-slate-400">
            Some of the applications I've built during my career
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project) => {
            const Icon = projectIcons[project.icon as keyof typeof projectIcons];
            const MetricIcon = metricIcons[project.metrics as keyof typeof metricIcons] || Users;
            const colorClasses = getColorClasses(project.color);
            
            return (
              <Card key={project.id} className="bg-dark-card border-dark-accent hover-glow transition-all duration-300 group overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${colorClasses.split(' ').slice(0, 2).join(' ')} flex items-center justify-center`}>
                  <div className="text-center">
                    {Icon && (
                      <Icon className={`h-16 w-16 mb-4 group-hover:animate-bounce ${colorClasses.split(' ')[2]}`} />
                    )}
                    <h3 className="text-xl font-semibold text-white" data-testid={`project-name-${project.id}`}>
                      {project.name}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-slate-400 mb-4" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`bg-dark-accent px-2 py-1 rounded text-xs ${colorClasses.split(' ')[2]}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-emerald-400">
                      <MetricIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{project.metrics}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`${colorClasses.split(' ')[2]} hover:text-white transition-colors`}
                      data-testid={`project-link-${project.id}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
