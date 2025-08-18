import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { resumeData } from "@/data/resume-data";

const Footer = () => {
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
    <footer className="bg-dark-secondary border-t border-dark-accent py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400">
              © 2024{" "}
              <span className="text-cyan-bright font-semibold">
                {resumeData.personal.name}
              </span>
              . All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-bright transition-colors duration-300"
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
