"use client";

import vinodImage from "@/public/vinod-patidar.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "journey", "skills", "work", "connect"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="text-lg font-medium lowercase tracking-wide hover:text-primary transition-colors"
            >
              vinod patidar
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "journey", label: "the journey" },
                { id: "skills", label: "what i bring" },
                { id: "work", label: "recent work" },
                { id: "connect", label: "let's connect" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm lowercase tracking-wide transition-colors hover:text-primary ${
                    activeSection === id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-foreground transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
              <div className="flex flex-col space-y-4">
                {[
                  { id: "journey", label: "the journey" },
                  { id: "skills", label: "what i bring" },
                  { id: "work", label: "recent work" },
                  { id: "connect", label: "let's connect" },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-sm lowercase tracking-wide transition-colors hover:text-primary text-left ${
                      activeSection === id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20"
      >
        <div className="text-center space-y-8 max-w-4xl">
          <div className="space-y-4 flex flex-col items-center justify-center">
            <Image
              src={vinodImage}
              alt="vinod patidar profile picture"
              width={100}
              height={80}
              className="rounded-full size-36 object-cover"
            />
            <h1 className="text-6xl md:text-8xl font-light leading-none tracking-tight lowercase">
              vinod patidar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground lowercase tracking-wide">
              software engineer & entrepreneur
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lowercase">
              crafting digital experiences that matter, one line of code at a
              time. passionate about building solutions that solve real problems
              and create meaningful impact. currently exploring the intersection
              of artificial intelligence and user experience design.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm lowercase">
              <span className="px-4 py-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                full-stack development
              </span>
              <span className="px-4 py-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                product design
              </span>
              <span className="px-4 py-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                startup founder
              </span>
              <span className="px-4 py-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                ai & ux
              </span>
            </div>

            <div className="pt-8">
              <button
                onClick={() => scrollToSection("journey")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 lowercase tracking-wide"
              >
                discover my story
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
      </section>

      {/* Journey Section */}
      <section
        id="journey"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light lowercase tracking-tight">
              the journey
            </h2>
            <p className="text-muted-foreground lowercase">
              from curious student to passionate builder
            </p>
          </div>

          <div className="space-y-16 animate-on-scroll">
            {/* The Beginning */}
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h3 className="text-3xl font-medium lowercase">the beginning</h3>
              <p className="text-lg leading-relaxed lowercase text-muted-foreground">
                it all started with a simple question: &ldquo;how do websites
                work?&rdquo; as a curious student, i spent countless nights
                learning html, css, and javascript. what began as a hobby
                quickly became an obsession with creating digital experiences
                that could connect people and solve real problems.
              </p>
            </div>

            {/* The Evolution */}
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h3 className="text-3xl font-medium lowercase">the evolution</h3>
              <p className="text-lg leading-relaxed lowercase text-muted-foreground">
                during the pandemic, i took the plunge into entrepreneurship.
                building my first startup taught me more about product
                development, user experience, and the realities of bringing
                ideas to life than any course ever could.
              </p>
            </div>

            {/* The Present */}
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h3 className="text-3xl font-medium lowercase">the present</h3>
              <p className="text-lg leading-relaxed lowercase text-muted-foreground">
                today, i focus on the intersection of artificial intelligence
                and user experience. building scalable systems and creating
                products that make technology more accessible and
                human-centered.
              </p>
            </div>
          </div>

          {/* Values and focus */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="bg-muted/50 p-8 rounded-lg space-y-6 lowercase">
              <h4 className="text-xl font-medium">what drives me</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium">problem-solving</h5>
                    <p className="text-sm text-muted-foreground">
                      turning complex challenges into elegant solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium">impact</h5>
                    <p className="text-sm text-muted-foreground">
                      creating products that make a real difference
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium">continuous learning</h5>
                    <p className="text-sm text-muted-foreground">
                      embracing new technologies and methodologies
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium">community</h5>
                    <p className="text-sm text-muted-foreground">
                      building and supporting developer communities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg space-y-6 lowercase">
              <h4 className="text-xl font-medium">current explorations</h4>
              <div className="space-y-4">
                <div className="p-4 bg-background rounded border-l-4 border-primary">
                  <h5 className="font-medium">ai-powered ux design</h5>
                  <p className="text-sm text-muted-foreground mt-1">
                    integrating artificial intelligence into user experience
                    workflows to create more intuitive and personalized
                    experiences.
                  </p>
                </div>
                <div className="p-4 bg-background rounded border-l-4 border-primary">
                  <h5 className="font-medium">scalable architectures</h5>
                  <p className="text-sm text-muted-foreground mt-1">
                    building systems that grow with user needs while maintaining
                    performance and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center px-6 py-20 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light lowercase tracking-tight mb-4">
              what i bring to the table
            </h2>
            <p className="text-muted-foreground lowercase">
              a blend of technical expertise and creative problem-solving
            </p>
          </div>

          <div className="animate-on-scroll">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold lowercase tracking-wide">
                    technical skills
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "javascript/typescript",
                      level: "expert",
                      years: "5+",
                    },
                    { name: "react/next.js", level: "expert", years: "4+" },
                    { name: "node.js/python", level: "advanced", years: "4+" },
                    { name: "database design", level: "advanced", years: "4+" },
                    {
                      name: "cloud architecture",
                      level: "intermediate",
                      years: "3+",
                    },
                    { name: "api development", level: "expert", years: "5+" },
                  ].map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group p-5 rounded-xl border border-border/50 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold lowercase text-lg">
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              skill.level === "expert"
                                ? "bg-primary text-primary-foreground"
                                : skill.level === "advanced"
                                ? "bg-primary/80 text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {skill.years} years experience
                        </span>
                        <div className="flex space-x-1">
                          {[
                            ...Array(
                              skill.level === "expert"
                                ? 5
                                : skill.level === "advanced"
                                ? 4
                                : 3
                            ),
                          ].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-2 bg-primary rounded-full"
                              style={{
                                animationDelay: `${index * 100 + i * 50}ms`,
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design & Product Skills */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold lowercase tracking-wide">
                    design & product
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "user experience design",
                      level: "advanced",
                      years: "4+",
                    },
                    {
                      name: "product strategy",
                      level: "advanced",
                      years: "4+",
                    },
                    {
                      name: "agile methodologies",
                      level: "expert",
                      years: "5+",
                    },
                    { name: "team leadership", level: "advanced", years: "3+" },
                  ].map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group p-5 rounded-xl border border-border/50 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold lowercase text-lg">
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              skill.level === "expert"
                                ? "bg-primary text-primary-foreground"
                                : skill.level === "advanced"
                                ? "bg-primary/80 text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {skill.years} years experience
                        </span>
                        <div className="flex space-x-1">
                          {[
                            ...Array(
                              skill.level === "expert"
                                ? 5
                                : skill.level === "advanced"
                                ? 4
                                : 3
                            ),
                          ].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-2 bg-primary rounded-full"
                              style={{
                                animationDelay: `${index * 100 + i * 50}ms`,
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light lowercase tracking-tight mb-4">
              recent work
            </h2>
            <p className="text-muted-foreground lowercase">
              projects that showcase my journey and passion for building
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-on-scroll">
            <div className="bg-muted p-8 rounded-lg space-y-4 lowercase hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                  portfolio website
                </h3>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <p className="text-muted-foreground">
                a storytelling portfolio built with next.js, featuring smooth
                animations, interactive elements, and responsive design. the
                very site you&apos;re on right now.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  next.js
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  typescript
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  tailwind css
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  react
                </span>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <span>⭐</span>
                    <span>featured project</span>
                  </span>
                  <span>•</span>
                  <span>live demo</span>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg space-y-4 lowercase hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                  ai-powered dashboard
                </h3>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <p className="text-muted-foreground">
                an intelligent analytics dashboard that uses machine learning to
                provide predictive insights and automated recommendations for
                business intelligence.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  python
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  tensorflow
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  react
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  d3.js
                </span>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <span>🚀</span>
                    <span>in development</span>
                  </span>
                  <span>•</span>
                  <span>coming soon</span>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg space-y-4 lowercase hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group md:col-span-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                  open source contributions
                </h3>
                <span className="text-sm text-muted-foreground">ongoing</span>
              </div>
              <p className="text-muted-foreground">
                actively contributing to the developer community through open
                source projects, mentoring, and knowledge sharing. passionate
                about building tools that make development more accessible and
                enjoyable.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  open source
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  community
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  mentorship
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  education
                </span>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <span>🌟</span>
                    <span>community impact</span>
                  </span>
                  <span>•</span>
                  <span>50+ contributions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="connect"
        className="min-h-screen flex items-center px-6 py-20 bg-muted/30"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light lowercase tracking-tight">
              let&apos;s connect
            </h2>
            <p className="text-muted-foreground lowercase text-lg">
              interested in collaborating or just want to chat? i&apos;d love to
              hear from you.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://twitter.com/thevinodpatidar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors lowercase"
              >
                @thevinodpatidar
              </a>
              <a
                href="https://linkedin.com/in/thevinodpatidar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border rounded-full hover:bg-muted transition-colors lowercase"
              >
                linkedin
              </a>
              <a
                href="https://github.com/thevinodpatidar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border rounded-full hover:bg-muted transition-colors lowercase"
              >
                github
              </a>
            </div>

            <div className="space-y-4 lowercase">
              <p className="text-muted-foreground">
                currently open to new opportunities and collaborations
              </p>
              <p className="text-sm text-muted-foreground">
                based in india • available for remote work worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <p className="text-muted-foreground lowercase">
          crafted with ❤️ by vinod patidar
        </p>
      </footer>
    </div>
  );
}
