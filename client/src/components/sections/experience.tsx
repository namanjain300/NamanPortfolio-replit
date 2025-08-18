import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronRight, MapPin, Calendar, Building2 } from "lucide-react";
import { resumeData } from "@/data/resume-data";

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "previous":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "early-career":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
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

  return (
    <section id="experience" className="py-20 px-4 bg-dark-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
            Experience
          </h2>
          <p className="text-slate-400">
            My professional journey in mobile development
          </p>
        </div>

        <div className="grid gap-6">
          {resumeData.experience.map((exp, index) => (
            <Card
              key={exp.id}
              className="bg-dark-card border-dark-accent hover-glow transition-all duration-300 cursor-pointer"
              onClick={() => toggleExpanded(exp.id)}
            >
              <CardContent className="p-6">
                {/* Header Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(exp.status)}`}>
                        {getStatusLabel(exp.status)}
                      </span>
                      <span className="text-slate-400 text-sm flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-cyan-bright mb-1">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-4 text-slate-300 text-sm">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-3 w-3" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    className="text-slate-400 hover:text-cyan-bright transition-colors duration-200 p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpanded(exp.id);
                    }}
                  >
                    {expandedItems.has(exp.id) ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {/* Highlights - Collapsible */}
                {expandedItems.has(exp.id) && (
                  <div className="border-t border-dark-accent pt-4 mt-4">
                    <ul className="text-slate-400 space-y-2 text-sm">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-cyan-bright rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Preview of first highlight when collapsed */}
                {!expandedItems.has(exp.id) && (
                  <div className="text-slate-400 text-sm">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-bright rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="line-clamp-2">{exp.highlights[0]}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 italic">
                      Click to see more highlights
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
