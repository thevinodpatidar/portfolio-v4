export default function SkillsSection() {
  return (
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

        <div className="animate-on-scroll space-y-12">
          {/* Frontend Development */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium lowercase text-primary border-b border-border/50 pb-2">
              frontend development
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "javascript/typescript",
                  level: 95,
                  description:
                    "building scalable web applications with modern js/ts",
                },
                {
                  name: "react/next.js",
                  level: 90,
                  description:
                    "creating interactive user interfaces and full-stack apps",
                },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-background/50 p-6 rounded-lg border border-border/50"
                >
                  <div>
                    <h4 className="font-semibold lowercase text-lg mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground lowercase">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium lowercase text-primary border-b border-border/50 pb-2">
              backend development
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "node.js",
                  level: 85,
                  description: "server-side applications and api development",
                },
                {
                  name: "python",
                  level: 80,
                  description: "data processing and automation scripts",
                },
                {
                  name: "database design",
                  level: 85,
                  description: "sql & nosql database architecture",
                },
                {
                  name: "api development",
                  level: 90,
                  description: "restful & graphql api design",
                },
                {
                  name: "cloud architecture",
                  level: 75,
                  description: "aws/azure deployment and scaling",
                },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-background/50 p-6 rounded-lg border border-border/50"
                >
                  <div>
                    <h4 className="font-semibold lowercase text-lg mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground lowercase">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design & Strategy */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium lowercase text-primary border-b border-border/50 pb-2">
              design & strategy
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "ux/ui design",
                  level: 85,
                  description: "user-centered design and prototyping",
                },
                {
                  name: "product strategy",
                  level: 80,
                  description: "roadmapping and feature prioritization",
                },
                {
                  name: "agile methodologies",
                  level: 90,
                  description: "scrum & kanban implementation",
                },
                {
                  name: "team leadership",
                  level: 75,
                  description: "mentoring and cross-functional collaboration",
                },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-background/50 p-6 rounded-lg border border-border/50"
                >
                  <div>
                    <h4 className="font-semibold lowercase text-lg mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground lowercase">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium lowercase text-primary border-b border-border/50 pb-2">
              tools & technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "git",
                "docker",
                "kubernetes",
                "aws",
                "vercel",
                "figma",
                "notion",
                "slack",
                "postman",
                "mongodb",
                "postgresql",
                "redis",
                "graphql",
                "tailwind css",
                "framer motion",
              ].map((tool, index) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-background rounded-full text-sm lowercase border border-border/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
