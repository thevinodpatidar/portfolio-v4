"use client";

import vinodImage from "@/public/vinod-patidar.jpg";
import Image from "next/image";

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-24"
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
          <h1 className="text-6xl md:text-6xl font-light leading-none tracking-tight">
            Vinod Patidar
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
              onClick={() => onScrollToSection("journey")}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 lowercase tracking-wide"
            >
              discover my story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  );
}
