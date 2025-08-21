import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Smartphone,
  Users,
  Zap,
  Target,
  Settings
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { resumeData } from "@/data/resume-data";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const subjectLabel = subjectOptions.find((option) => option.value === data.subject)?.label || data.subject;

    // Open mailto immediately (no delay)
    const mailto = `mailto:${resumeData.personal.email}?subject=${encodeURIComponent(subjectLabel)}&body=${encodeURIComponent(data.message)}`;
    window.location.href = mailto;

    // Save to Firestore in the background (non-blocking)
    try {
      addDoc(collection(db, "contacts"), {
        name: data.name,
        email: data.email,
        subject: subjectLabel,
        message: data.message,
        createdAt: serverTimestamp()
      }).catch(error => {
        console.error("Firebase error:", error);
        // Silent fail - doesn't affect user experience
      });
    } catch (error) {
      console.error("Firebase error:", error);
      // Silent fail - doesn't affect user experience
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: resumeData.personal.email,
      href: `mailto:${resumeData.personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: resumeData.personal.phone,
      href: `tel:${resumeData.personal.phone}`,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/namanjain300",
      href: resumeData.personal.linkedin,
    },
    {
      icon: MapPin,
      label: "Location",
      value: resumeData.personal.location,
      href: null,
    },
  ];

  const whyWorkWithMe = [
    { icon: Smartphone, text: "5+ years of Flutter expertise" },
    { icon: Target, text: "Cross-platform development specialist" },
    { icon: Zap, text: "Performance optimization expert" },
    { icon: Users, text: "Team leadership experience" },
    { icon: Settings, text: "Scalable architecture focus" },
  ];

  const subjectOptions = [
    { value: "project-inquiry", label: "Project Inquiry" },
    { value: "collaboration", label: "Collaboration" },
    { value: "job-opportunity", label: "Job Opportunity" },
    { value: "consultation", label: "Consultation" },
    { value: "other", label: "Other" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-dark-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to discuss your next mobile app project? Let's connect and explore how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-dark-card border-dark-accent hover-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-bright">
                  Let's Connect
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-cyan-bright/20 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-cyan-bright" />
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">{info.label}</p>
                          <p className="text-slate-200">{info.value}</p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a
                        key={info.label}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block hover:bg-dark-accent/30 rounded-lg p-2 -m-2 transition-colors"
                        data-testid={`contact-info-${info.label.toLowerCase()}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={info.label} data-testid={`contact-info-${info.label.toLowerCase()}`}>
                        {content}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-dark-accent">
                  <h4 className="text-lg font-medium mb-4 text-slate-200">
                    Why Work With Me?
                  </h4>
                  <ul className="space-y-2 text-slate-400">
                    {whyWorkWithMe.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <li key={index} className="flex items-center">
                          <Icon className="h-4 w-4 text-emerald-400 mr-3 flex-shrink-0" />
                          <span>{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-dark-card border-dark-accent hover-glow transition-all duration-300">
            <CardContent className="p-8">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-200">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="mt-2 bg-dark-accent border-dark-accent text-slate-200 placeholder-slate-400 focus:border-cyan-bright focus:ring-cyan-bright"
                    data-testid="contact-form-name"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-200">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-2 bg-dark-accent border-dark-accent text-slate-200 placeholder-slate-400 focus:border-cyan-bright focus:ring-cyan-bright"
                    data-testid="contact-form-email"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="subject" className="text-slate-200">Subject</Label>
                  <Select
                    onValueChange={(value) => form.setValue("subject", value)}
                    value={form.watch("subject")}
                  >
                    <SelectTrigger
                      className="mt-2 bg-dark-accent border-dark-accent text-slate-200 focus:border-cyan-bright focus:ring-cyan-bright"
                      data-testid="contact-form-subject"
                    >
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-accent border-dark-accent">
                      {subjectOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value} className="text-slate-200 focus:bg-cyan-bright/20">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-200">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project or how I can help you..."
                    className="mt-2 bg-dark-accent border-dark-accent text-slate-200 placeholder-slate-400 focus:border-cyan-bright focus:ring-cyan-bright resize-none"
                    data-testid="contact-form-message"
                    {...form.register("message")}
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-bright to-blue-electric hover:from-blue-electric hover:to-cyan-bright text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover-glow"
                  data-testid="contact-form-submit"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
