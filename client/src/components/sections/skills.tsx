import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
    Smartphone,
    Code,
    Database,
    GitBranch,
    Users,
    Target,
    MessageSquare,
    Calendar,
    Clock,
    TrendingUp,
    Zap,
    Globe,
    Layers,
    Settings
} from "lucide-react";
import { resumeData } from "@/data/resume-data";

const Skills = () => {
    const technicalSkills = {
        "Languages & Frameworks": [...resumeData.skills.languages, ...resumeData.skills.frameworks],
        "State Management": resumeData.skills.stateManagement,
        "Databases & Storage": resumeData.skills.databases,
        "Development Tools": resumeData.skills.tools.slice(0, 6),
        "Specialties": resumeData.skills.specialties
    };

    const professionalSkills = [
        { name: "Team Leadership", percentage: 95, icon: Users },
        { name: "Problem Solving", percentage: 90, icon: Target },
        { name: "Communication", percentage: 85, icon: MessageSquare },
        { name: "Project Management", percentage: 80, icon: Calendar },
        { name: "Time Management", percentage: 85, icon: Clock }
    ];

    const domainExpertise = ["EdTech", "E-commerce", "Healthcare", "Music Streaming", "Productivity Apps", "Payment Systems"];

    return (
        <section id="skills" className="py-20 px-4 bg-dark-secondary">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
                        Skills & Expertise
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Comprehensive technical and professional skills developed through years of experience
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <div className="space-y-6">
                        <Card className="bg-dark-card border-dark-accent hover-glow transition-all duration-300">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-semibold mb-6 text-cyan-bright flex items-center">
                                    <Code className="h-6 w-6 mr-3" />
                                    Technical Skills
                                </h3>

                                <div className="space-y-6">
                                    {Object.entries(technicalSkills).map(([category, skills]) => (
                                        <div key={category}>
                                            <h4 className="text-lg font-medium mb-3 text-slate-200">
                                                {category}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="bg-dark-accent text-cyan-bright px-3 py-1 rounded-full text-sm hover:bg-cyan-bright hover:text-dark-card transition-colors duration-200"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Professional Skills */}
                    <div className="space-y-6">
                        <Card className="bg-dark-card border-dark-accent hover-glow transition-all duration-300">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-semibold mb-6 text-cyan-bright flex items-center">
                                    <TrendingUp className="h-6 w-6 mr-3" />
                                    Professional Skills
                                </h3>

                                <div className="space-y-6">
                                    {/* Soft Skills with Progress Bars */}
                                    <div>
                                        <h4 className="text-lg font-medium mb-4 text-slate-200">
                                            Soft Skills
                                        </h4>
                                        <div className="space-y-4">
                                            {professionalSkills.map((skill) => {
                                                const Icon = skill.icon;
                                                return (
                                                    <div key={skill.name} className="space-y-2">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center space-x-2">
                                                                <Icon className="h-4 w-4 text-emerald-400" />
                                                                <span className="text-slate-300 text-sm">{skill.name}</span>
                                                            </div>
                                                            <span className="text-cyan-bright text-sm font-medium">
                                                                {skill.percentage}%
                                                            </span>
                                                        </div>
                                                        <Progress
                                                            value={skill.percentage}
                                                            className="h-2 bg-dark-accent"
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Domain Expertise */}
                                    <div>
                                        <h4 className="text-lg font-medium mb-3 text-slate-200">
                                            Domain Expertise
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {domainExpertise.map((domain) => (
                                                <span
                                                    key={domain}
                                                    className="bg-dark-accent text-cyan-bright px-3 py-1 rounded-full text-sm hover:bg-cyan-bright hover:text-dark-card transition-colors duration-200"
                                                >
                                                    {domain}
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

export default Skills;
