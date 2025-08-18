import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { Linkedin, Github } from "lucide-react";
import { resumeData } from "@/data/resume-data";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import profileImage from "@assets/IMG-20180318-WA0003-EDIT_1755492662218.jpg";

const Hero = () => {
  const { scrollToSection } = useSmoothScroll();
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    try {
      const response = await apiRequest('GET', '/api/resume/download');
      const data = await response.json();

      if (data.success) {
        // In a real implementation, this would trigger an actual download
        toast({
          title: "Resume Downloaded",
          description: "Resume download has been initiated.",
        });
      }
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Unable to download resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: resumeData.personal.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: `mailto:${resumeData.personal.email}`,
      label: "Email",
    },
    {
      icon: Github,
      href: "https://github.com/namanjain300",
      label: "GitHub",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-accent"
    >
      <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
        <div className="mb-8">
          <div className="w-60 h-60 mx-auto mb-6 animate-float">
            <img
              src={profileImage}
              alt="Naman Jain - Senior Flutter Developer"
              className="w-full h-full rounded-full object-cover border-4 border-blue-bright shadow-2xl hover:shadow-blue-bright/50 transition-all duration-300"
              data-testid="profile-image"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-bright to-blue-electric bg-clip-text text-transparent">
            {resumeData.personal.name}
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
            Senior Flutter Developer with{" "}
            <span className="text-blue-bright font-semibold">
              {resumeData.personal.experience}
            </span>{" "}
            of experience
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            {resumeData.personal.summary}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={handleDownloadResume}
            className="bg-gradient-to-r from-blue-bright to-blue-electric hover:from-blue-electric hover:to-blue-bright text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover-glow"
            data-testid="download-resume-button"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>

          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-blue-bright text-blue-bright hover:bg-blue-bright hover:text-dark-primary font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            data-testid="contact-button"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-bright transition-colors duration-300 text-2xl"
                data-testid={`social-link-${social.label.toLowerCase()}`}
              >
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
