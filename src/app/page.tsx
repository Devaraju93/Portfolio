/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Globe,
  MessageCircle,
  User,
  Briefcase,
  Menu,
  X,
  Sun,
  Moon,
  Calendar,
  MapPin,
  Download,
} from "lucide-react";
import { sendEmail } from "@/lib/actions";
import Image from "next/image";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...");

    try {
      await sendEmail(formData);

      // Dismiss loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out! I'll get back to you soon.",
        duration: 5000,
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Dismiss loading toast and show error
      toast.dismiss(loadingToast);
      toast.error("Failed to send message", {
        description:
          "Sorry, there was an error sending your message. Please try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    { name: "React.js", color: "bg-blue-500" },
    { name: "Next.js", color: "bg-gray-800" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Tailwind CSS", color: "bg-teal-500" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "MongoDB", color: "bg-green-500" },
    { name: "PostgreSQL", color: "bg-blue-700" },
    { name: "Git", color: "bg-orange-500" },
    { name: "JavaScript", color: "bg-yellow-600" },
    { name: "HTML", color: "bg-red-500" },
    { name: "CSS", color: "bg-purple-500" },
    { name: "Rest Api", color: "bg-pink-600" },
    { name: "Material UI", color: "bg-indigo-500" },
    { name: "Shadcn UI", color: "bg-green-400" },
    { name: "Prisma(ORM)", color: "bg-blue-300" },
    { name: " Github", color: "bg-gray-400" },
    { name: "GCP", color: "bg-yellow-400" },
    { name: "Neon Tech", color: "bg-pink-400" },
    { name: "Uploadthing", color: "bg-teal-600" },
    { name: "AWS(S3, RDS)", color: "bg-purple-500" },
    // { name: "Responsive Design",  color: "bg-blue-500" },
    // { name: "GraphQL",  color: "bg-purple-600" },
    // { name: "REST APIs",  color: "bg-yellow-500" },
    // { name: "Docker",  color: "bg-blue-400" },
    // { name: "AWS",  color: "bg-orange-600" },
    // { name: "CI/CD",  color: "bg-gray-500" },
    // { name: "Agile Methodologies",  color: "bg-pink-500" },
  ];

  const experiences = [
    {
      title: "Software Developer",
      company: "Jobox Hire Private Limited",
      location: "Bangalore, India",
      duration: "Sep 2023 – Present",
      description:
        "Worked on two major projects, including a job portal and the 'Recruit and Earn' platform. Contributed to frontend and backend development, focusing on performance, scalability, and user experience.",
      projects: [
        {
          name: "Job Portal",
          duration: "Sep 2023 – Present",
          highlights: [
            "Led the development of a job portal from scratch, contributing to both frontend and backend functionalities.",
            "Optimized API performance with a 30% faster response time and enhanced scalability via reusable components, reducing dev time by 20%.",
            "Improved code structure and SEO, leading to a 15% increase in page speed, 10% boost in organic traffic, and 20% reduction in maintenance time.",
            "Built role-based, mobile-responsive dashboards, increasing mobile user engagement by 25%.",
            "Utilized Prisma ORM for optimized database querying.",
          ],
        },
        {
          name: " Recruit and Earn",
          duration: "Dec 2024 – Feb 2025",
          highlights: [
            "Led end-to-end frontend development for employer and admin portals, from design to deployment.",
            "Developed and optimized candidate referral workflows for recruiters to refer candidates and earn incentives.",
            "Implemented secure form validation, authentication, and authorization for improved user experience.",
            "Built reusable, responsive UI components using Next.js, React.js, and Tailwind CSS.",
            "Used TypeScript for improved type safety, reducing runtime errors and improving maintainability.",
            "Collaborated closely with backend teams to consume REST APIs efficiently.",
          ],
        },
      ],
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma ORM",
        "REST API",
        "node.js",
        "PostgreSQL",
        "AWS S3",
        "Postman",
      ],
    },
  ];

  const projects = [
    {
      title: "CourseBuddy",
      description:
        "Developed Course Buddy, a responsive course review platform with user interactions, admin controls, and features like OAuth, search, filters, and pagination using Next.js, Tailwind CSS, Prisma, and PostgreSQL. ",
      tech: [
        "Next.js",
        "React.js",
        "Shadcn UI",
        "Node.js",
        "Typescript",
        "Kinde Auth",
        "PostgreSQL",
        "Docker",
      ],
      image: "/coursebuddy.png",
      github: "https://github.com/Devaraju93/CourseBuddy",
      live: "https://course-buddy-nine.vercel.app/",
    },
    {
      title: "Loan Calculator",
      description: `Developed a responsive React.js application for calculating EMIs and displaying amortization schedules.
Integrated real-time currency conversion using external exchange rate APIs for accurate financial data.
Ensured a smooth user experience with clean UI and responsive design using Material UI.`,
      tech: [
        "React.js",
        "Material UI",
        "Context API",
        "ExchangeRate API",
        "Postman",
      ],
      image: "/Loancalculator.png",
      github: "https://github.com/Devaraju93/Loan-Calculator",
      live: "https://loan-calculator-sand.vercel.app/",
    },
    {
      title: "Bidverse",
      description: ` Developed BidVerse, a real-time auction web app for creating and bidding on items.
Built with Next.js, React, Tailwind CSS, Prisma, and PostgreSQL for full-stack integration.
Implemented Uploadthing for smooth and efficient file uploads.`,
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Typescript",
        "Prisma(ORM)",
        "PostgreSQL",
      ],
      image: "/bidverse.png",
      github: "https://github.com/Devaraju93/buzzboard",
      live: "https://bid-verse.vercel.app/",
    },

    {
      title: "Recruit and Earn",
      description:
        "Led  development of employer and admin portals using Next.js, React, Tailwind CSS, and TypeScript, implementing referral workflows, secure authentication, and responsive UI integrated with REST APIs.",
      tech: [
        "Next.Js",
        "Typescript",
        "PostgreSQL",
        "Node.js",
        "Prisma",
        " Uploadthing",
        " Neon Tech",
        "REST API",
      ],
      image: "/recruitEarn.png",
      // github: "https://github.com/alexjohnson/task-manager",
      live: "https://www.joboxhire.co/",
    },
    {
      title: "Job Portal",
      description: `Led full-stack development of a scalable job portal,  reducing development time with reusable components.
Improved code structure and implemented SEO best practices to enhance page speed, organic traffic, and maintainability.
Developed role-based, mobile-responsive dashboards and optimized database queries using Prisma ORM.`,
      tech: [
        "Next.Js",
        "Typescript",
        "PostgreSQL",
        "Docker",
        "Prisma",
        "AWS S3",
        "AWS RDS",
        "REST API",
      ],
      image: "/jobPortal.png",
      // github: "https://github.com/alexjohnson/weather-dashboard",
      live: "https://joboxhire.com/",
    },
  ];

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark" : ""}`}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        {/* Toaster for notifications */}
        <Toaster position="top-right" richColors />

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Devaraju G
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="ml-4"
                >
                  {isDarkMode ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </Button>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center space-x-4">
                <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                  {isDarkMode ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors px-4 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                    <Image
                      src="/photo.jpeg"
                      alt="Alex Johnson - Full Stack Developer"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Software{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Passionate developer with 2 years of experience creating modern
                web applications.
                <br /> I love turning ideas into beautiful, functional digital
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                  onClick={() =>
                    window.open("https://github.com/Devaraju93", "_blank")
                  }
                >
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Devaraju_resume.pdf";
                    link.download = "Devaraju_Resume.pdf";
                    link.click();
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Crafting Scalable Web Solutions for Over 2 Years
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I am a dedicated full-stack developer with 2+ years of
                  experience building modern, high-performance web applications.
                  My development journey began with a curiosity about how the
                  web works and has since evolved into a strong passion for
                  building intuitive, scalable, and impactful digital solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I specialize in React, Next.js, TypeScript, and modern
                  JavaScript frameworks, with hands-on experience in building
                  both frontend and backend systems. From designing clean user
                  interfaces to optimizing backend logic, I take pride in
                  delivering well-structured, maintainable, and user-friendly
                  applications.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I am a continuous learner who thrives in dynamic environments
                  and enjoys tackling complex problems. Whether working
                  independently or as part of a team, I am committed to writing
                  clean code, meeting deadlines, and staying up-to-date with the
                  latest in tech.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      2+ Years Experience
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-2">
      <Code className="w-5 h-5 text-blue-600" />
      <span className="text-gray-700 dark:text-gray-300">
        15+ Projects Completed
      </span>
    </div> */}
                </div>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900">
                <Image
                  src="/softwareImage.png"
                  alt="Profile Picture"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Work Experience
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center mr-6  gap-2 text-gray-600 dark:text-gray-300">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Projects Mapping */}
                    {exp.projects?.map((project, pIndex) => (
                      <div key={pIndex} className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          {project.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {project.duration}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                          {project.highlights.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Skills & Technologies
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 ${skill.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}
                    >
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h3>
                    {/* <Badge
                      variant="secondary"
                      className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                    >
                      {skill.level}
                    </Badge> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 bg-white dark:bg-gray-800"
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
              {/* <p className="text-gray-600 dark:text-gray-300 text-lg">
                I would love to hear from you! Whether you have a question,
                want to collaborate on a project, or just want to say hi, feel
                free to reach out.
              </p> */}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Let&apos;s Connect
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Email
                      </h4>
                      <a
                        href="mailto:devrajg9318@gmail.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        devrajg9318@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        LinkedIn
                      </h4>
                      <a
                        href="https://www.linkedin.com/in/devaraju-g-369745264/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        https://www.linkedin.com/in/devaraju-g-369745264/
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        GitHub
                      </h4>
                      <a
                        href="https://github.com/Devaraju93"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        https://github.com/Devaraju93
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                    Send Message
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    I would love to hear from you! Please fill out the form
                    below and I will get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="dark:text-gray-200">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="dark:text-gray-200">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="dark:text-gray-200">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message here..."
                        className="min-h-[120px] dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-gray-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Devaraju G
            </div>
            <p className="text-gray-400 mb-6">
              Building the future, one line of code at a time.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:devrajg9318@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
