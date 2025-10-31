"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load all components for code splitting
const Navigation = lazy(() => import("@/components/navigation"));
const HeroSection = lazy(() => import("@/components/hero-section"));
const JourneySection = lazy(() => import("@/components/journey-section"));
const SkillsSection = lazy(() => import("@/components/skills-section"));
const WorkSection = lazy(() => import("@/components/work-section"));
const BlogSection = lazy(() => import("@/components/blog-section"));
const ContactSection = lazy(() => import("@/components/contact-section"));
const Footer = lazy(() => import("@/components/footer"));

// Loading component for Suspense fallback
function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-32" />
            <div className="hidden md:flex items-center space-x-8">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-6 w-6 md:hidden" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-24">
        <div className="text-center space-y-8 max-w-4xl">
          <div className="space-y-4 flex flex-col items-center justify-center">
            <Skeleton className="rounded-full size-36" />
            <Skeleton className="h-16 w-80" />
            <Skeleton className="h-8 w-64" />
          </div>

          <div className="space-y-6">
            <div className="space-y-3 max-w-2xl mx-auto">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6 mx-auto" />
              <Skeleton className="h-6 w-4/5 mx-auto" />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Skeleton className="h-10 w-32 rounded-full" />
              <Skeleton className="h-10 w-36 rounded-full" />
              <Skeleton className="h-10 w-28 rounded-full" />
              <Skeleton className="h-10 w-32 rounded-full" />
            </div>

            <Skeleton className="h-12 w-48 mx-auto rounded-full" />
          </div>
        </div>
      </div>

      {/* Section Skeletons */}
      <div className="min-h-screen flex items-center px-6 py-20 space-y-16">
        <div className="max-w-4xl mx-auto space-y-16 w-full">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>

          {/* Content Blocks */}
          <div className="space-y-12">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Skeleton className="h-8 w-48 mx-auto" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-5/6 mx-auto" />
                <Skeleton className="h-5 w-4/5 mx-auto" />
              </div>
            </div>

            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Skeleton className="h-8 w-44 mx-auto" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/6 mx-auto" />
              </div>
            </div>

            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Skeleton className="h-8 w-40 mx-auto" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-5/6 mx-auto" />
              </div>
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="bg-muted/50 p-8 rounded-lg space-y-6">
              <Skeleton className="h-6 w-32" />
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Skeleton className="w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-48" />
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Skeleton className="w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-3 w-52" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg space-y-6">
              <Skeleton className="h-6 w-36" />
              <div className="space-y-4">
                <div className="p-4 bg-background rounded border-l-4 space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-4/5" />
                </div>
                <div className="p-4 bg-background rounded border-l-4 space-y-2">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-3/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "journey", "skills", "work", "blog", "connect"];
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
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Suspense fallback={<LoadingSkeleton />}>
        <Navigation
          activeSection={activeSection}
          onScrollToSection={scrollToSection}
        />
        <HeroSection onScrollToSection={scrollToSection} />
        <JourneySection />
        <SkillsSection />
        <WorkSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
}
