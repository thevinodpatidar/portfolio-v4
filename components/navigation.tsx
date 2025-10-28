"use client";

import { useState } from "react";

interface NavigationProps {
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navigation({
  activeSection,
  onScrollToSection,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    onScrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
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
  );
}
