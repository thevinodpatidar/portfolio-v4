"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="text-center space-y-8 max-w-4xl">
          <div className="space-y-4">
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
              and create meaningful impact.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm lowercase">
              <span className="px-4 py-2 bg-muted rounded-full">
                full-stack development
              </span>
              <span className="px-4 py-2 bg-muted rounded-full">
                product design
              </span>
              <span className="px-4 py-2 bg-muted rounded-full">
                startup founder
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light lowercase tracking-tight">
              the journey
            </h2>
            <p className="text-muted-foreground lowercase">
              from curious student to passionate builder
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium lowercase">
                  the beginning
                </h3>
                <p className="leading-relaxed lowercase">
                  it all started with a simple question: &ldquo;how do websites
                  work?&rdquo; that curiosity led me down a rabbit hole of code,
                  design, and endless possibilities. what began as a hobby
                  quickly became a passion for creating digital experiences.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-medium lowercase">
                  the evolution
                </h3>
                <p className="leading-relaxed lowercase">
                  from building my first website to launching products that
                  serve thousands of users, every project has been a learning
                  experience. each challenge has shaped my approach to
                  problem-solving and innovation.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-muted p-6 rounded-lg lowercase">
                <h4 className="font-medium mb-2">what drives me</h4>
                <ul className="space-y-2 text-sm">
                  <li>• solving complex problems with elegant solutions</li>
                  <li>• creating products that make a difference</li>
                  <li>• learning something new every day</li>
                  <li>• building communities around great ideas</li>
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-lg lowercase">
                <h4 className="font-medium mb-2">current focus</h4>
                <p className="text-sm leading-relaxed">
                  exploring the intersection of artificial intelligence and user
                  experience, building scalable systems, and mentoring the next
                  generation of developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen flex items-center px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light lowercase tracking-tight mb-4">
              what i bring to the table
            </h2>
            <p className="text-muted-foreground lowercase">
              a blend of technical expertise and creative problem-solving
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-medium lowercase">
                technical skills
              </h3>
              <div className="space-y-4">
                {[
                  "javascript/typescript",
                  "react/next.js",
                  "node.js/python",
                  "database design",
                  "cloud architecture",
                  "api development",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 lowercase"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-medium lowercase">
                design & product
              </h3>
              <div className="space-y-4">
                {[
                  "user experience design",
                  "product strategy",
                  "agile methodologies",
                  "team leadership",
                  "startup experience",
                  "problem solving",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 lowercase"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-medium lowercase">soft skills</h3>
              <div className="space-y-4">
                {[
                  "communication",
                  "collaboration",
                  "adaptability",
                  "continuous learning",
                  "empathy",
                  "creativity",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 lowercase"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light lowercase tracking-tight mb-4">
              recent work
            </h2>
            <p className="text-muted-foreground lowercase">
              projects that showcase my journey and passion for building
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-lg space-y-4 lowercase">
              <h3 className="text-xl font-medium">portfolio website</h3>
              <p className="text-muted-foreground">
                a storytelling portfolio built with next.js, featuring smooth
                animations and responsive design. the very site you&apos;re on
                right now.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background rounded-full text-xs">
                  next.js
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs">
                  typescript
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs">
                  tailwind css
                </span>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg space-y-4 lowercase">
              <h3 className="text-xl font-medium">coming soon</h3>
              <p className="text-muted-foreground">
                new projects and collaborations are always in the works. stay
                tuned for exciting developments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background rounded-full text-xs">
                  innovation
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs">
                  problem solving
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-xs">
                  growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center px-6 py-20 bg-muted/30">
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
