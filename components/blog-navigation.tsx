"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogNavigation() {
  const pathname = usePathname();
  const isBlogPage = pathname?.startsWith("/blog");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-medium lowercase tracking-wide hover:text-primary transition-colors"
          >
            vinod patidar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#journey"
              className="text-sm lowercase tracking-wide transition-colors hover:text-primary text-muted-foreground"
            >
              the journey
            </Link>
            <Link
              href="/#skills"
              className="text-sm lowercase tracking-wide transition-colors hover:text-primary text-muted-foreground"
            >
              what i bring
            </Link>
            <Link
              href="/#work"
              className="text-sm lowercase tracking-wide transition-colors hover:text-primary text-muted-foreground"
            >
              recent work
            </Link>
            <Link
              href="/blog"
              className={`text-sm lowercase tracking-wide transition-colors hover:text-primary ${
                isBlogPage ? "text-primary" : "text-muted-foreground"
              }`}
            >
              thoughts
            </Link>
            <Link
              href="/#connect"
              className="text-sm lowercase tracking-wide transition-colors hover:text-primary text-muted-foreground"
            >
              let's connect
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

